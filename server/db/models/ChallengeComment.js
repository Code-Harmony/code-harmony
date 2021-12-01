const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const CodingChallenge =  require('./CodingChallenge');


const ChallengeComment = db.define('challengecomments',{
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
          model: User,
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

module.exports = ChallengeComment; 