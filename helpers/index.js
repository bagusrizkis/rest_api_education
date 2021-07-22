const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "rahasia";

function hashPassword(userPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(userPassword, salt);
  return hash;
}

function comparePassword(userPassword, hashPassword) {
  const isCorrect = bcrypt.compareSync(userPassword, hashPassword);
  return isCorrect;
}

function generateToken(payload) {
  const token = jwt.sign(payload, PRIVATE_KEY);
  return token;
}

function decodeToken(token) {
  const decoded = jwt.verify(token, PRIVATE_KEY);
  return decoded;
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
};
