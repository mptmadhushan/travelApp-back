module.exports = (app) => {
  const items = require("../controllers/nearBy.controller");

  var router = require("express").Router();

  router.post("/", items.create);

  router.get("/find/:place", items.find);

  router.get("/findAll", items.findAll);

  router.delete("/:id", items.delete);

  app.use("/api/nearBy", router);
};
