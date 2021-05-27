const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static register(req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((result) => {
        res.status(201).json({
          message: "user created",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  }

  static login(req, res) {
    User.findOne({
      where: { email: req.body.email },
    })
      .then((user) => {
        if (!user) {
          throw {
            name: "LoginError",
            message: `User with email: ${req.body.email} not found`,
          };
        }
        const checkPw = comparePassword(req.body.password, user.password);
        if (!checkPw) {
          throw {
            name: "LoginError",
            message: `password for email: ${req.body.email} does not match`,
          };
        }
        // kalau ketemu kan akan ngirim token ke user
        const token = generateToken({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({
          // token
          access_token: token,
        });
      })
      .catch((err) => {
        if (err.name == "LoginError")
          return res
            .status(400)
            .json({ message: "user email or password is not correct" });
        res.status(500).json({
          message: err,
        });
      });
  }
}

module.exports = UserController;
