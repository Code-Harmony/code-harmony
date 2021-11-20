const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');
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
          model: UserDetail,
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