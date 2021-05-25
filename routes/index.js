const router = require("express").Router();
const MovieC = require("../controllers/MovieController");

router.get("/movies", MovieC.GetMovies);
router.post("/movies", MovieC.CreateMovie);

module.exports = router;
