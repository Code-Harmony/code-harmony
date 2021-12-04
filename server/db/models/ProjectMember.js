const Sequelize = require('sequelize');
const db = require('../db');
const User =  require('./User');
const Project = require('./Project');

const ProjectMember = db.define('projectmembers',{
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    projectId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: Project,
        key: 'id'
      }
    }
  });

  module.exports = ProjectMember;