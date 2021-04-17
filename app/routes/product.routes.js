module.exports = (app) => {
  const products = require("../controllers/product.controller.js");
  const isAuthenticated = require("../middlewares/authproduct.js");

  var router = require("express").Router();

  router.get("/", isAuthenticated, products.getAll);
  router.post("/searchall", isAuthenticated, products.searchAll);
  router.post("/favourites/edit", isAuthenticated, products.updateFavourite);
  router.get("/favourites", isAuthenticated, products.getFavourites);
  router.post(
    "/favourites/search",
    isAuthenticated,
    products.getSearchFavourites
  );

  app.use("/api/products", router);
};
