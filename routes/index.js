const router = require("express").Router();
const MovieC = require("../controllers/MovieController");
const UserC = require("../controllers/UserController");
const { authentication, authorization } = require("../middlewares/auth");

router.post("/users/register", UserC.register);
router.post("/users/login", UserC.login);

// harus login dulu
// authentikasi
router.use(authentication);
router.get("/movies", MovieC.GetMovies);
router.post("/movies", MovieC.createMovie);
// router.use(); untuk authorization tidak bisa mengetahui params
router.put("/movies/:id", authorization, MovieC.updateMovie);
router.delete("/movies/:id", authorization, MovieC.deleteMovie);

module.exports = router;
