const Sequelize = require('sequelize');
const db = require('../db');
const UserDetail =  require('./UserDetail');
const Project = require('./Project');

const ProjectMember = db.define('projectmembers',{
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: UserDetail,
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