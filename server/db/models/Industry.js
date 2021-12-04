const Sequelize = require('sequelize');
const db = require('../db');

const Industry = db.define('industries',{
    name: {
        type: Sequelize.STRING
      },
});


module.exports = Industry; 