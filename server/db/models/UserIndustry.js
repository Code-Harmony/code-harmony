const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Industry =  require('./Industry');

const UserIndustry = db.define('userindustries',{
    userId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    industryId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: Industry,
        key: 'id'
      }
    },
  });

  module.exports = UserIndustry; 