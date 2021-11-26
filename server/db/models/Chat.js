const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Chat = db.define('chats',{
    name: {
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      }
});


module.exports = Chat;