const Sequelize = require('sequelize');
const db = require('../db');

const UserDetails = db.define('userdetails',{
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

const Language = db.define('languages',{
    name: {
        type: Sequelize.STRING
      },
});

const Market = db.define('markets',{
    name: {
        type: Sequelize.STRING
      },
});

const UserMarket = db.define('usermarkets',{
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: UserDetails,
      key: 'id'
    }
  },
  marketId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: Market,
      key: 'id'
    }
  },
});

const UserLanguage = db.define('userlanguages',{
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: UserDetails,
      key: 'id'
    }
  },
  languageId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: Language,
      key: 'id'
    }
  },
});

module.exports = UserDetails, Language, Market, UserMarket, UserLanguage; 