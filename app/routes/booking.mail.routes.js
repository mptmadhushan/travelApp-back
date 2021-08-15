module.exports = (app) => {
  const mail = require("../controllers/booking.email");
  var router = require("express").Router();

  router.post("/", mail.mail);

  app.use("/api/book", router);
};
