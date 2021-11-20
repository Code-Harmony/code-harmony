const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');
const Skill =  require('./Skill');


const UserSkill = db.define('userskills',{
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: UserDetail,
        key: 'id'
      }
    },
    skillId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: Skill,
        key: 'id'
      }
    },
  });

  module.exports = UserSkill; 