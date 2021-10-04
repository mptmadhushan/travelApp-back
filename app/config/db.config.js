module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "password",
  HOST: "173.82.16.160",
  USER: "developer",
  PASSWORD: "Passport@1",
  DB: "traveldb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
