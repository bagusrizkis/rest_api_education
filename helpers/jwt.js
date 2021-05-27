const jwt = require("jsonwebtoken");
// didapat dari environtment variable
const SECRET_KEY = process.env.SECRET_KEY_JWT;

// generate token
const generateToken = (payload) => {
  console.log(payload);
  const token = jwt.sign(payload, SECRET_KEY);
  return token;
};

// verify token
const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
