//this is the access point for all things database related!

const db = require('./db');

//calling in models
const User = require('./models/User');
const Chat = require('./models/ChatData');
const Message = require('./models/ChatData');
const UserDetails =  require('./models/UserData');
const Language =  require('./models/UserData');
const Market =  require('./models/UserData');
const UserLanguage =  require('./models/UserData');
const UserMarket =  require('./models/UserData');
const Project =  require('./models/ProjectData');
const ProjectMember =  require('./models/ProjectData');
const CodingChallenge =  require('./models/CodingChallengeData');
const UserSolution =  require('./models/CodingChallengeData');
const ChallengeComments =  require('./models/CodingChallengeData');

module.exports = {
  db,
  models: {
    User,
    Chat,
    Message,
    UserDetails,
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
