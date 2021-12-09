//this is the access point for all things database related!

const db = require('./db');

//calling in models
const User = require('./models/User');
const Skill =  require('./models/Skill');
const Industry =  require('./models/Industry');
const UserSkill =  require('./models/UserSkill');
const UserIndustry =  require('./models/UserIndustry');
const CodingChallenge =  require('./models/CodingChallenge');
const UserSolution =  require('./models/UserSolution');
const ChallengeComment =  require('./models/ChallengeComment');
const Friend = require('./models/FriendsList');

module.exports = {
  db,
  models: {
    User,
    Skill,
    Industry,
    UserSkill,
    UserIndustry,
    CodingChallenge,
    UserSolution,
    ChallengeComment,
    Friend
  },
}
