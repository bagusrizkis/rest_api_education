const router = require("express").Router();

const { authentication } = require("../middlewares/auth");

router.use("/users", require("./users"));

// authentication dari user login
router.use(authentication); // terjadi auth untuk router dibawahnya
router.use("/movies", require("./movies"));

module.exports = router;
