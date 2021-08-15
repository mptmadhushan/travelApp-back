module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "password",
  HOST: "128.199.122.181",
  USER: "dev",
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
