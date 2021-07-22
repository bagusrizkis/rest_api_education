const { Movie } = require("../models");

class MovieController {
  static GetMovies(req, res) {
    Movie.findAll({
      where: {
        UserId: req.currentUser.id,
      },
    })
      .then((data) => {
        res.status(200).json({
          result: data,
        });
      })
      .catch((err) => {
        if ((err.name = "SequelizeValidationError")) {
          res.status(400).json({ err: err });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
      });
  }

  static createMovie(req, res) {
    const { title, genre, imageUrl, releasedYear, status } = req.body;
    Movie.create({
      title,
      genre,
      imageUrl,
      releasedYear,
      status,
      UserId: req.currentUser.id,
    })
      .then((data) => {
        res.status(201).json({
          result: data,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: "Internal server error" });
      });
  }

  static updateMovie(req, res) {
    const { title, genre, imageUrl, releasedYear, status } = req.body;
    Movie.update(
      {
        title,
        genre,
        imageUrl,
        releasedYear,
        status,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    )
      .then((result) => {
        if (result[0] != 1) {
          throw {
            name: "NotFound",
            message: "Data Not Found",
          };
        } else {
          res.status(200).json({
            result: result[1][0],
          });
        }
      })
      .catch((err) => {
        if (err.name == "NotFound") {
          res.status(404).json({ error: err.message });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
      });
  }

  static deleteMovie(req, res) {
    Movie.destroy({
      where: { id: req.params.id },
    })
      .then((result) => {
        if (result == null) {
          throw {
            name: "NotFound",
            message: "Data Not Found",
          };
        } else {
          res.status(200).json({
            message: "success delete data",
          });
        }
      })
      .catch((err) => {
        if (err.name == "NotFound") {
          res.status(404).json({ error: err.message });
        } else {
          res.status(500).json({ error: "Internal server error" });
        }
      });
  }
}

module.exports = MovieController;
