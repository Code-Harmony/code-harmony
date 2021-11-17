const Sequelize = require('sequelize');
const db = require('../db');

const Chat = db.define('chats',{
    name: {
        type: Sequelize.STRING
      },
});

const Message = db.define('messages',{
    text: {
        type: Sequelize.STRING
      },
});

module.exports = Chat, Message;