const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');
const Industry =  require('./Industry');

const UserIndustry = db.define('usermarkets',{
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: UserDetail,
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