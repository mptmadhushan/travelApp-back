module.exports = (sequelize, DataTypes) => {
  const memoryRecall = sequelize.define("place", {
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
  });

  return memoryRecall;
};
