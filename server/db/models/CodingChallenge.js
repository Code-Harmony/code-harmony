const Sequelize = require('sequelize');
const db = require('../db');


const CodingChallenge = db.define('codingchallenges',{
    level: {
        type: Sequelize.INTEGER
      },
      prompt: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      solution: {
        type: Sequelize.STRING
      },
      testcode: {
        type: Sequelize.STRING
      },

});

module.exports = CodingChallenge; 