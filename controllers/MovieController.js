const { Movie } = require("../models");

class MovieController {
  // TODO get ALl Movies
  static GetMovies(req, res) {
    const { id } = req.currentUser;
    Movie.findAll({ where: { UserId: id } })
      .then((result) => {
        //   ngebalikin status code dan data (JSON)
        res.status(200).json({
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  }

  static GetMovieDetail(req, res, next) {
    Movie.findByPk(req.params.id)
      .then((result) => {
        //   ngebalikin status code dan data (JSON)
        res.status(200).json({
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  }

  // TODO create Movie
  static CreateMovie(req, res) {
    const { title, genre, imageUrl, releasedYear, status } = req.body;
    const { id } = req.currentUser;
    Movie.create({
      title,
      genre,
      imageUrl,
      releasedYear,
      status,
      UserId: id,
    })
      .then((result) => {
        res.status(500).json({
          message: "created",
          data: result,
        });
      })
      .catch((err) => {
        if (err.name == "SequelizeValidationError") {
          res.status(400).json({
            message: err.errors[0].message,
          });
        } else {
          res.status(500).json({
            message: err,
          });
        }
      });
  }

  // TODO delete movie by id
  static deleteMovie(req, res) {
    // find py pk dulu
    let dataMovie; // siapkan untuk menyimpa data movie
    Movie.findOne({
      where: { id: req.params.id },
    })
      .then((result) => {
        // bisa handle untuk not found disini juga
        dataMovie = result; // simpan data disini
        return Movie.destroy({
          where: { id: req.params.id },
        });
      })
      .then((result) => {
        if (result === 0) {
          // new Error("message")
          // buat custom error untuk catch
          throw {
            name: "NotFound",
            message: "Movie with id " + req.params.id + " not found",
          };
        }
        res.status(200).json({
          message: "delete success",
          deletedData: {
            title: dataMovie.title,
          },
        });
      })
      .catch((err) => {
        if (err.name == "NotFound") {
          res.status(404).json({
            message: err.message,
          });
        } else {
          res.status(500).json({
            message: err,
          });
        }
      });
  }

  // TODO update Movie by id
  static updateMovie(req, res) {
    console.log("testing", req.body);
    let data = req.body;
    Movie.update(data, {
      where: { id: req.params.id },
      returning: true,
    })
      .then((result) => {
        console.log(result);
        if (result[0] == 0) {
          throw {
            name: "NotFound",
            message: "Movie with id " + req.params.id + " not found",
          };
        } else {
          res.status(200).json(result[1][0]);
        }
      })
      .catch((err) => {
        if (err.name == "NotFound") {
          res.status(404).json({
            message: err.message,
          });
        } else {
          res.status(500).json({
            message: "internal server error",
          });
        }
      });
  }
  // TODO update Movie status by id
  static patchMovie(req, res) {
    let movieId = req.params.id;
    let newStatus = req.body.status;
    Movie.update(
      {
        status: newStatus,
      },
      { where: { id: movieId }, returning: true }
    )
      .then((result) => {
        if (result[0] == 0) {
          throw {
            name: "NotFound",
            message: "movie with id " + movieId + " not found",
          };
        } else {
          res.status(200).json(result[1][0]);
        }
      })
      .catch((err) => {
        if (err.name == "NotFound") {
          res.status(404).json({
            message: err.message,
          });
        } else {
          res.status(500).json({
            message: "internal server error",
          });
        }
      });
  }
}

module.exports = MovieController;
