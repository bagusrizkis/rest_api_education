const { decodeToken } = require("../helpers");
const { User, Movie } = require("../models");

function authentication(req, res, next) {
  const { access_token } = req.headers;
  try {
    const userDecoded = decodeToken(access_token);
    User.findByPk(userDecoded.id)
      .then((user) => {
        if (!user) {
          res.status(401).json({
            err: "token invalid",
          });
        } else {
          req.currentUser = {
            id: user.id,
          };
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({ err: err });
      });
  } catch (error) {
    res.status(401).json({
      err: "token invalid",
    });
  }
}

function authorization(req, res, next) {
  // meriksa modelnya apakah memang dimiliki user
  Movie.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((movie) => {
      console.log(movie);
      if (!movie) {
        throw {
          name: "AuthorizationError",
          message: "movie not found",
        };
      } else {
        if (movie.UserId == req.currentUser.id) {
          next();
        } else {
          throw {
            name: "AuthorizationError",
            message: "User not authorized",
          };
        }
      }
    })
    .catch((err) => {
      console.log(err);
      // handle conditional
      if (err.name == "AuthorizationError") {
        res.status(401).json({
          err: err.message,
        });
      } else {
        res.status(500).json({ err: err });
      }
    });
}

module.exports = {
  authentication,
  authorization,
};
