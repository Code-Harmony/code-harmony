const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');


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
          model: User,
          key: 'id'
        }
      },
});


module.exports = Project; 