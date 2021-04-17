const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

const isAuthenticated = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  jwt.verify(authorizationHeader, config.jwtSecret, (err, decoded) => {
    if (err) {
      req.authorId = null;
      next();
    } else {
      req.authorId = decoded.id;
      next();
    }
  });
};

module.exports = isAuthenticated;
