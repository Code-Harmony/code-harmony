const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Skill =  require('./Skill');


const UserSkill = db.define('userskills',{
    userId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    skillId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: Skill,
        key: 'id'
      }
    },
  });

  module.exports = UserSkill; 