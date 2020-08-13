const { Sequelize, DataTypes } = require('sequelize');

const { DB_CONFIG, DB_OPTIONS } = require('../../config');

const sequelize = new Sequelize(
  DB_CONFIG.DB_NAME,
  DB_CONFIG.DB_USER,
  DB_CONFIG.DB_PASSWORD,
  DB_OPTIONS,
);

const User = sequelize.define('user', {
  // Model attributes are defined here

  phone: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  name: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  searchedAt: {
    type: DataTypes.DATE,
  },
}, {
  // Other model options go here
});

// User.sync({ force: true });

module.exports = User;
