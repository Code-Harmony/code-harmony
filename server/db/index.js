//this is the access point for all things database related!

const db = require('./db');

//calling in models
const User = require('./models/User');
const Chat = require('./models/ChatData');
const Message = require('./models/ChatData');
const Customer =  require('./models/UserData');
const Language =  require('./models/UserData');
const Market =  require('./models/UserData');
const UserLanguage =  require('./models/UserData');
const UserMarket =  require('./models/UserData');
const Project =  require('./models/ProjectData');
const ProjectMember =  require('./models/ProjectData');
const CodingChallenge =  require('./models/CodingChallengeData');
const UserSolution =  require('./models/CodingChallengeData');
const ChallengeComments =  require('./models/CodingChallengeData');

//associations could go here!

//User Data
Customer.belongsTo(User);
User.hasOne(Customer);

Customer.belongsTo(UserLanguage);
UserLanguage.hasMany(Customer);

Customer.belongsTo(UserMarket);
Customer.hasMany(UserMarket);

Market.belongsTo(UserMarket);
UserMarket.hasMany(Market);
Language.belongsTo(UserLanguage);
UserLanguage.hasMany(Language);

//Coding Challenge Data

CodingChallenge.belongsTo(ChallengeComments);
ChallengeComments.hasMany(CodingChallenge);

Customer.belongsTo(ChallengeComments);
ChallengeComments.hasMany(Customer);

Customer.belongsTo(UserSolution);
UserSolution.hasMany(Customer)
CodingChallenge.belongsTo(UserSolution);
UserSolution.hasMany(CodingChallenge);

//Chat Data
Customer.belongsTo(Chat);
Chat.hasMany(Customer);

Chat.belongsTo(Message);
Message.hasMany(Chat);
Customer.belongsTo(Message);
Message.hasMany(Customer);

//Project Data
Project.belongsTo(ProjectMember);
ProjectMember.hasMany(Project);

Customer.belongsTo(ProjectMember);
ProjectMember.hasMany(Customer);

module.exports = {
  db,
  models: {
    User,
    Chat,
    Message,
    Customer,
    Language,
    Market,
    UserLanguage,
    UserMarket,
    Project,
    ProjectMember,
    CodingChallenge,
    UserSolution,
    ChallengeComments
  },
}
