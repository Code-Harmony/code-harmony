const Sequelize = require('sequelize');
const db = require('../db');

const UserDetail = db.define('userdetails',{
    name: {
        type: Sequelize.STRING
      },
    email: {
        type: Sequelize.STRING
      },
    job: {
        type: Sequelize.STRING
      },
    github: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      },

    looking_for: {
        type: Sequelize.STRING
      },
    challenge_points: {
        type: Sequelize.INTEGER
      },
    address: {
        type: Sequelize.STRING
      },
   image: {
        type: Sequelize.STRING
      },
});


module.exports = UserDetail; 