const {
  db,
  models: {
    User,
    Skill,
    Industry,
    UserSkill,
    UserIndustry,
    CodingChallenge,
    UserSolution,
    ChallengeComments,
    Friend,
  },
} = require("../server/db");

const industries = [
  "Art and Design",
  "Technology",
  "Healthcare",
  "Entertainment and Sports",
  "Legal",
  "Social Science",
  "Finance",
  "Sales",
  "Real Estate",
  "Education",
  "Government",
];

const skills = [
  "Python",
  "JavaScript",
  "C#",
  "C",
  "C++",
  "GO",
  "R",
  "Swift",
  "PHP",
  "Assembly",
  "Visual Basic",
  "HTML",
  "CSS",
  "Angular",
  "React",
  "Elm",
  "TypeScript",
  "jQuery",
  "Vue",
  "Front End",
  "Back End",
  "Database",
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

    User.create({
      username: "cody",
      password: "123",
      name: "cody",
      email: "cody@gmail.com",
      industry: "HR",
      github: "@cody",
      description: "Fullstack engineer",
      info: "Fullstack engineer",
      looking_for: "product designer",
      challenge_points: 3,
      address: "brooklyn",
      role: "Member",
    }),
    User.create({
      username: "murphy",
      password: "123",
      name: "murphy",
      email: "murphy@gmail.com",
      industry: "FinanceBro",
      github: "@murphy",
      description: "Fullstack engineer",
      info: "Fullstack engineer",
      looking_for: "product designer",
      challenge_points: 1,
      address: "manhattan",
      role: "Member",
    }),
    User.create({
      username: "bill",
      password: "123",
      name: "Bill",
      email: "bill@gmail.com",
      industry: "Health",
      github: "@bill",
      description: "Fullstack engineer",
      info: "Fullstack engineer",
      looking_for: "product designer",
      challenge_points: 1,
      address: "brooklyn",
      role: "Member",
    }),
    User.create({
      username: "jamie",
      password: "123",
      name: "jamie",
      email: "jamie@gmail.com",
      industry: "real estate mortgage thing",
      github: "@jamieha",
      description: "real estate consultant",
      info: "real estate consultant",
      looking_for: "backend developer",
      challenge_points: 3,
      address: "long island city",
      role: "Member",
    }),
    User.create({
      username: "stephen",
      password: "123",
      name: "stephen",
      email: "stephen@gmail.com",
      industry: "college marketing?",
      github: "@stephen",
      description: "web communications developer",
      info: "web communications developer",
      looking_for: "backend developer",
      challenge_points: 3,
      address: "austin texas",
      role: "Member",
    }),
    User.create({
      username: "amata",
      password: "123",
      name: "amata",
      email: "amata@gmail.com",
      industry: "data",
      github: "@amata",
      description: "data engineer",
      info: "data engineer",
      looking_for: "front end engineer",
      challenge_points: 3,
      address: "morningside heights",
      role: "Member",
    }),
    User.create({
      username: "patricia",
      password: "123",
      name: "patricia",
      email: "patricia@gmail.com",
      industry: "structural engineer",
      github: "@patricia",
      description: "structural engineer",
      info: "structural engineer",
      looking_for: "ux researcher",
      challenge_points: 3,
      address: "downtown brooklyn",
      role: "Member",
    }),
    User.create({
      username: "sam",
      password: "123",
      name: "sam",
      email: "sam@gmail.com",
      industry: "Sports",
      github: "@sam",
      description: "Professional Athletic Trainer",
      info: "Professional Athletic Trainer",
      looking_for: "front end engineer",
      challenge_points: 2,
      address: "downtown",
      role: "Member",
    }),
    User.create({
      username: "lucy",
      password: "123",
      name: "lucy",
      email: "lucy@gmail.com",
      industry: "Biomedical",
      github: "@lucy",
      description: "Biomedical Engineer",
      info: "Biomedical Engineer",
      looking_for: "back end engineer",
      challenge_points: 2,
      address: "downtown",
      role: "Member",
    }),
    User.create({
      username: "stannie-lim",
      password: "123",
      name: "Stanley",
      email: "Stanley@gmail.com",
      industry: "software",
      github: "@stannie-lim",
      description: "fullstack engineer",
      info: "fullstack engineer",
      looking_for: "students",
      challenge_points: 3,
      address: "Staten Island",
      role: "Member",
    }),
    User.create({
      username: "prof",
      password: "123",
      name: "prof?",
      email: "prof@gmail.com",
      industry: "education",
      github: "@prof",
      description: "instructor",
      info: "instructor",
      looking_for: "students",
      challenge_points: 3,
      address: "Fullstack Academy",
      role: "Member",
    })
    
  //creating one friends link
  const friendslist = await Promise.all([
    Friend.create({ user1id: 2, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 2 }),
    Friend.create({ user1id: 1, user2id: 3 }),
    Friend.create({ user1id: 3, user2id: 1 }),
    Friend.create({ user1id: 4, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 4 }),
    Friend.create({ user1id: 5, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 5 }),
    Friend.create({ user1id: 6, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 6 }),
    Friend.create({ user1id: 7, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 7 }),
    Friend.create({ user1id: 8, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 8 }),
    Friend.create({ user1id: 9, user2id: 1 }),
    Friend.create({ user1id: 1, user2id: 9 }),
  ]);

  //Creating industries
  await Promise.all(
    industries.map((type) => {
      return Industry.create({ name: type });
    })
  );

  //Creating skills
await Promise.all(
    skills.map(type => {
      return(
        Skill.create({name:type})
      )  
    })
  );

  // create user industries
  async function joinUserIndustry(userId, industryId) {
    UserIndustry.create(userId,industryId)
  }

  //create user skills
  async function joinUserSkill (userId, skillId) {
    UserIndustry.create(userId,skillId)
  }

 //Creating coding challenges
 const codingChallenges = await Promise.all([
  CodingChallenge.create({ level: 1, prompt: 'useMapToUpperCase - use the Array.protoype.map within the useMapToUpperCase function', description:"Remember, the map method can only be called on arrays (so you may need to convert the argument to an array). Map each element so the strings are all upper case.", testcode: "const useMapToUpperCase = str => {return str.split(' ').map((word) => {return word.toUpperCase();})}"
 }),
 CodingChallenge.create({ level: 1, prompt: 'use the Array.prototype.filter method to determine if the string has an "@"', description:'Array.prototype.includes will come in handy to determine if string has an "@"', testcode: "const useFilter = arr => {return arr.filter(correctEmail => correctEmail.includes('@'));}"
 }),
 CodingChallenge.create({ level: 2, prompt: "The function findObjPropsHasOwn accepts an object as an argument and returns a string with the name of every key directly attached to the object passed as an argument.", description:"The keys in the string should only be keys attached to the object, not on its internal prototype (aka .proto), to achieve this, use Object.prototype.hasOwnProperty.", testcode: "function findObjKeys(obj){Object.keys(obj).map(key =>{return `${key}`}).join(',')}"
}),
CodingChallenge.create({ level: 2, prompt: 'Create the function multiplicationTable that accepts two arguments', description:'The rows X columns represents the dimension of a multiplication table. The return value is a multidimensional or one-dimensional array.', testcode: "function multiplicationTable(rows,columns){ let table = []; for (let i = 1; i < rows + 1; i++){} row = [];for (let j = 1; j < columns + 1; j++){row.push(j*i);}table.push(row);}return table;"
}),
CodingChallenge.create({ level: 3, prompt: "The alternate function returns function that returns a value every other time it is called.", description:'', testcode: "const alternate = (func) => {let count = 1; return function() {if (count %2 === 1){ count++;return func();} else { count++;}};};"
}),
CodingChallenge.create({ level: 3, prompt: 'The twice function can only invoke the function passed to it a total of two times.', description:'', testcode: "const twice = (func) => {et count = 1; return function() {if (count <= 2){ count++;return func();} else { return 0;}};};"
}),
])
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
