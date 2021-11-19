const Sequelize = require('sequelize');
const db = require('../db');
const UserDetails =  require('./UserData');


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
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetails,
          key: 'id'
        }
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
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetails,
          key: 'id'
        }
      },
    challengeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: CodingChallenge,
          key: 'id'
        }
      },
});


module.exports = CodingChallenge, UserSolution, ChallengeComments; 