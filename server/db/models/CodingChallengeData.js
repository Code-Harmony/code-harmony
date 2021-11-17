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

const UserSolution = db.define('usersolutions',{
      solution: {
        type: Sequelize.STRING
      },
});

const ChallengeComments = db.define('challengecomments',{
    comment: {
      type: Sequelize.STRING
    },
    thumbsUp: {
        type: Sequelize.INTEGER
      },
    thumbsDown: {
        type: Sequelize.INTEGER
      },
});


module.exports = CodingChallenge, UserSolution, ChallengeComments; 