module.exports = (app) => {
  const items = require("../controllers/hotel.controller");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  router.post("/", items.create);

  router.get("/find/:package/:place", items.find);

  router.get("/findAll", items.findAll);

  router.get("/findAllPackages", items.findAllPackages);

  router.get("/findAllPlaces", items.findAllPlaces);

  router.delete("/:id", items.delete);

  app.use("/api/hotels", router);
};
