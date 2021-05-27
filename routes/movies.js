const router = require("express").Router();
const MovieC = require("../controllers/MovieController");
const { authorizationMovie } = require("../middlewares/auth");

router.get("/", MovieC.GetMovies);
router.post("/", MovieC.CreateMovie);
router.get("/:id", authorizationMovie, MovieC.GetMovieDetail);
// router.use(authorizationMovie); // gak boleh masang kayak gini
// id belum ada -> undefined
router.delete("/:id", authorizationMovie, MovieC.deleteMovie);
router.put("/:id", authorizationMovie, MovieC.updateMovie);
router.patch("/:id", authorizationMovie, MovieC.patchMovie);

module.exports = router;
