const Sequelize = require('sequelize');
const db = require('../db');
const UserDetails =  require('./UserData');


const Project = db.define('projects',{
    name: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      },
    userId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: UserDetails,
          key: 'id'
        }
      },
});

const ProjectMember = db.define('projectmembers',{
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: UserDetails,
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

module.exports = Project, ProjectMember; 