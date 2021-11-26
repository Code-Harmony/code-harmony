const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Chat =  require('./Chat');

const Message = db.define('messages',{
    text: {
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      chatId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: Chat,
          key: 'id'
        }
      }
});

module.exports = Message;