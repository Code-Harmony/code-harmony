const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');

const UserSolution = db.define('usersolutions',{
    solution: {
      type: Sequelize.STRING
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: UserDetail,
        key: 'id'
      }
    },
});

module.exports = UserSolution;