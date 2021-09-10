module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define("place", {
    place: {
      type: DataTypes.STRING,
    },
    near_by_place: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
    branches: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return Place;
};
