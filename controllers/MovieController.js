const { Movie } = require("../models");

class MovieController {
  // TODO get ALl Movies
  static GetMovies(req, res) {
    Movie.findAll()
      .then((result) => {
        //   ngebalikin status code dan data (JSON)
        res.status(200).json(result);
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
    Movie.create({
      title,
      genre,
      imageUrl,
      releasedYear,
      status,
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
}

module.exports = MovieController;
