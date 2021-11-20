const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');
const Chat = db.define('chats',{
    name: {
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetail,
          key: 'id'
        }
      }
});


module.exports = Chat;