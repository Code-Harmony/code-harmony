const Sequelize = require('sequelize');
const db = require('../db');

const Customer = db.define('customer',{
    name: {
        type: Sequelize.STRING
      },
    email: {
        type: Sequelize.STRING
      },
    job: {
        type: Sequelize.STRING
      },
    github: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      },

    looking_for: {
        type: Sequelize.STRING
      },
    challenge_points: {
        type: Sequelize.INTEGER
      },
    address: {
        type: Sequelize.STRING
      },
   image: {
        type: Sequelize.STRING
      },
});

const Language = db.define('language',{
    name: {
        type: Sequelize.STRING
      },
});

const Market = db.define('market',{
    name: {
        type: Sequelize.STRING
      },
});

const UserMarket = db.define('usermarket',{
});

const UserLanguage = db.define('userlanguage',{
});

module.exports = Customer, Language, Market, UserMarket, UserLanguage; 