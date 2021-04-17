module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const isAuthenticated = require("../middlewares/authproduct.js");

  var router = require("express").Router();

  router.post("/signin", users.signin);
  router.post("/signup", users.signup);
  router.post("/profile/edit", isAuthenticated, users.profileUpdate);

  app.use("/api/users", router);
};
