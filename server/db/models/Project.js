const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');


const Project = db.define('projects',{
    name: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      },
    userId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetail,
          key: 'id'
        }
      },
});


module.exports = Project; 