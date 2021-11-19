const Sequelize = require('sequelize');
const db = require('../db');
const UserDetails =  require('./UserData');
const Chat = db.define('chats',{
    name: {
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetails,
          key: 'id'
        }
      }
});

const Message = db.define('messages',{
    text: {
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
      chatId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: Chat,
          key: 'id'
        }
      }
});

module.exports = Chat, Message;