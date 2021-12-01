const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');

const UserSolution = db.define('usersolutions',{
    solution: {
      type: Sequelize.STRING
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
});

module.exports = UserSolution;