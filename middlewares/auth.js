const { verifyToken } = require("../helpers/jwt");
const { User, Movie } = require("../models");

function authentication(req, res, next) {
  // akan terjadi authentikasi
  // terhadapat user yang login
  // access_token (jwt token) -> encode payload
  try {
    // dapat dari mana token dari usernya?
    // mencoba decode
    const dataDecoded = verifyToken(access_token);
    const { access_token } = req.headers;
    User.findByPk(dataDecoded.id)
      .then((user) => {
        if (!user) {
          throw {
            name: "AuthenticationError",
            message: `user with id: ${dataDecoded.id} not found`,
          };
        } else {
          // lolos :: user ditemukan
          // kirim data sementara berupa id ????
          req.currentUser = {
            id: user.id,
          }; // data user yang login
          next();
        }
      })
      .catch((err) => {
        res.status(401).json({
          message: "invalid token",
        });
      });
  } catch (error) {
    // gagal decode
    res.status(401).json({
      message: "invalid token",
    });
  }
}

const authorizationMovie = (req, res, next) => {
  // authorization
  // auth -> req.currentUser {id}
  //   console.log("masuk sini");
  const { id } = req.params;
  //   console.log("i :::", id);
  Movie.findOne({ where: { id: id } })
    .then((movie) => {
      // jika movie tidak ada
      if (!movie) {
        throw {
          name: "AuthorizationError",
          message: `movie with id ${id} not found`,
        };
      }
      if (movie.UserId == req.currentUser.id) {
        // lanjut ke middlware atau endpoint berikutnya
        next();
      } else {
        throw {
          name: "AuthorizationError",
          message: `user with id ${req.currentUser.id} does not have permission`,
        };
      }
    })
    .catch((err) => {
      res.status(401).json({
        message: err || "not authorized",
      });
    });
};

module.exports = {
  authentication,
  authorizationMovie,
};
