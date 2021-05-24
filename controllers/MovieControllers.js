const { Movie } = require("../models");

class MovieControllers {
  /**
   *
   * @param {*} request -> berisi data-data request dari client
   * @param {*} response
   */
  static getMovies(request, response) {
    // mengembalikan semua movies
    Movie.findAll()
      .then((result) => {
        // response.send(result);
        /**
         * Yang dikembalikan adalah:
         *  - status yaitu code yang digunakan untuk memberi tahu client tentang respon yang diberikan
         *  - json yaitu file yang kita kirimkan berbentuk json
         */
        response.status(200).json(result);
      })
      .catch((err) => {
        // 500 adalah error yang disebabkan oleh server sendiri
        // misal db yang tidak terkoneksi dll
        response.status(500).json({
          message: err,
        });
      });
  }

  static addMovie(req, res) {
    /**
     * Data yang siperlukan:
     * title, genre, imageUrl, releasedYear, status
     * yang didapat dari request body
     */
    const { title, genre, imageUrl, releasedYear, status } = req.body;
    Movie.create({
      title,
      genre,
      imageUrl,
      releasedYear,
      status,
    })
      .then((result) => {
        console.log(result);
        res.status(201).json({ message: "created", data: result });
      })
      .catch((err) => {
        // Handle error dari sequelize
        if (err.name == "SequelizeValidationError") {
          let message = [];
          for (let i = 0; i < err.errors.length; i++) {
            const e = err.errors[i];
            message.push(e.message);
          }
          console.log("message:", message);
          res.status(400).json({
            message: message,
          });
        } else {
          res.status(500).json({
            message: err,
          });
        }
      });
  }

  static deleteMovie(req, res) {
    /**
     * Kalau mau return value:
     * Find dulu
     * then -> return destroy
     * then -> response
     * catch -> err
     */
    Movie.destroy({
      where: {
        id: req.params.idMovie,
      },
    })
      .then((result) => {
        if (result == 1) {
          res.status(200).json({
            message: "deleted",
          });
        } else {
          res.status(404).json({
            message: "data not found",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  }
}

module.exports = MovieControllers;
