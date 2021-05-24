// req router dari express
const router = require("express").Router();
// import controller handler untuk path routing
const MovieC = require("../controllers/MovieControllers");

// testing url api
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/movies", MovieC.getMovies);
router.post("/movies", MovieC.addMovie);
router.delete("/movies/:idMovie", MovieC.deleteMovie);

module.exports = router;
