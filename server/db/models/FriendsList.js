const Sequelize = require ('sequelize');
const db = require('../db');
const User = require('./User')

const Friend = db.define('friendslist',{
    user1id:{
        type: Sequelize.INTEGER
    },
    user2id:{
        type: Sequelize.INTEGER
    }
});

module.exports = Friend;