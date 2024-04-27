const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    timezone: "+05:30",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: console.log,
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: " + error);
  }
})();

module.exports = { sequelize, Sequelize }; // export both the instance and the class
