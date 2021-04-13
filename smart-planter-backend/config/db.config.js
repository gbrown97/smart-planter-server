module.exports = {
    HOST: "localhost",
    USER: "team24",
    PASSWORD: "123456",
    DB: "plantdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };