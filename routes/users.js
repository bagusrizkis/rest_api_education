const router = require("express").Router();
const UserC = require("../controllers/UserController");

router.post("/register", UserC.register);
router.post("/login", UserC.login);

module.exports = router;
