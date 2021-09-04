const db = require("../models");
const Item = db.hotel;
exports.create = async (req, res) => {
  const mail = require("../controllers/newLocation.email");
  
  const place = {
    place: req.body.place,
    hotel_name: req.body.hotel_name,
    distance: req.body.distance,
    package: req.body.package,
    email: req.body.email,
    image: req.body.image,
  };

  // Save data in the database
  Item.create(place)
    .then((data) => {
      res.send(data);
      mail.mail(place);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data.",
      });
    });
};

exports.find = (req, res) => {
  newPlace = req.params.place;
  newPackage = req.params.package;
  return Item.findAll({
    where: {
      place: newPlace,
      package: newPackage,
    },
  })
    .then((data) => {
      console.log(">> All data", JSON.stringify(data, null, 2));
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};
exports.findAllPackages = (req, res) => {
  // newPlace = req.params.place;
  // newPackage = req.params.package;
  return Item.findAll({
    attributes: ["package"],
    group: ["package"],
    order: [["package", "ASC"]],
  })
    .then((data) => {
      console.log(">> All data", JSON.stringify(data, null, 2));
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};
exports.findAllPlaces = (req, res) => {
  newPlace = req.params.place;
  newPackage = req.params.package;
  return Item.findAll({
    attributes: ["place"],
    group: ["place"],
  })
    .then((data) => {
      console.log(">> All data", JSON.stringify(data, null, 2));
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};

exports.findAll = (req, res) => {
  return Item.findAll({}).then((data) => {
    console.log(">> All data", JSON.stringify(data, null, 2));
    res.send(data);
  });
};

exports.findByID = (req) => {
  return Item.findByPk((dataId = req.params.id), {})
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Item.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete data with id=${id}. Maybe data was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data with id=" + id,
      });
    });
};
