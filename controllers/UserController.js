const { comparePassword, generateToken } = require("../helpers");
const { User } = require("../models");

class UserController {
  static register(req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((data) => {
        res.status(201).json({
          email: data.email,
        });
      })
      .catch((err) => {
        res.status(500).json({
          err: "Internal Server Error",
        });
      });
  }
  static login(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: { email },
    })
      .then((user) => {
        if (!user) throw { name: "LoginFailed", message: "User Not Found" };
        const isCorrect = comparePassword(password, user.password);
        if (!isCorrect) {
          throw {
            name: "LoginFailed",
            message: "LoginFailed",
          };
        }
        // generate token
        const token = generateToken({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({
          access_token: token,
        });
      })
      .catch((err) => {
        if (err.name == "LoginFailed") {
          res.status(400).json({ err: "Wrong Email or Password" });
        } else {
          res.status(500).json({ err: err });
        }
      });
  }
}

module.exports = UserController;
