module.exports = (app) => {
  const items = require("../controllers/nearBy.controller");

  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], items.create);

  router.get("/find/:place", items.find);

  router.get("/findAll", items.findAll);

  router.delete("/:id", [authJwt.verifyToken], items.delete);

  app.use("/api/nearBy", router);
};
