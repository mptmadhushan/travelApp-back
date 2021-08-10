module.exports = (sequelize, DataTypes) => {
  const memoryRecall = sequelize.define("hotel", {
    place: {
      type: DataTypes.STRING,
    },
    hotel_name: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.NUMERIC(4, 1),
    },
    package: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });

  return memoryRecall;
};
