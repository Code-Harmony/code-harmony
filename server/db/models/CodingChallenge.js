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
      codespec: {
        type: Sequelize.TEXT
      },

});

module.exports = CodingChallenge; 