const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'je42177891', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"
});

module.exports = connection;