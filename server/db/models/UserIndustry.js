const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Industry =  require('./Industry');

const UserIndustry = db.define('usermarkets',{
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    industryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: Industry,
        key: 'id'
      }
    },
  });

  module.exports = UserIndustry; 