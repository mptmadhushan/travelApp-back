module.exports = (app) => {
  const mail = require("../controllers/newLocation.email");
  var router = require("express").Router();

  router.post("/", mail.mail);

  app.use("/api/newLocation", router);
};
