const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('projects',{
    name: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      },
});

const ProjectMember = db.define('projectmembers',{
});

module.exports = Project, ProjectMember; 