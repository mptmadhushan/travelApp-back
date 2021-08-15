const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const Role = db.role;

const app = express();

var corsOptions = {
  origin: "http://localhost:8088",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/nearBy.routes")(app);
require("./app/routes/hotel.routes")(app);
require("./app/routes/booking.mail.routes")(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db");
  // initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to TravelApp application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
