const fs = require('fs');
const path = require('path')
const faker = require('faker');

const {
  db,
  models: {
    User,
    Skill,
    Industry,
    UserSkill,
    UserIndustry,
    CodingChallenge,
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
  "TypeScript",
  "jQuery",
  "Vue",
  "SQL"
];

const useMapToUpperCase_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/useMapToUpperCase_spec.js'),
  (err) => { console.log(err) }
);

const useFilter_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/useFilter_spec.js'),
  (err) => { console.log(err) }
);

const findObjectsKey_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/findObjectsKey_spec.js'),
  (err) => { console.log(err) }
);

const multiplicationTable_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/multiplicationTable_spec.js'),
  (err) => { console.log(err) }
);

const alternate_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/alternate_spec.js'),
  (err) => { console.log(err) }
);

const twice_spec = fs.readFileSync(
  path.join(__dirname, '/challengeSpecs/twice_spec.js'),
  (err) => { console.log(err) }
);

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const paragraph = faker.lorem.paragraph()

    User.create({
      username: "cody",
      password: "123",
      name: "cody",
      email: "cody@gmail.com",
      industry: "Art and Design",
      github: "@cody",
      description: paragraph,
      info: 'Lead UX Designer',
      looking_for: "product designer",
      challenge_points: 3,
      zipcode: 10025,
      role: "Member",
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPo69yq6FXK9QzWg6itX0zVTBYY7ZsCpkuw10KcGT_hPPbmTuIgSvXCzP6n0lJTXRVTN8&usqp=CAU',
    }),
    User.create({
      username: "murphy",
      password: "123",
      name: "murphy",
      email: "murphy@gmail.com",
      industry: "Technology",
      github: "@murphy",
      description: paragraph,
      info: "Fullstack Engineer",
      looking_for: "product designer",
      challenge_points: 1,
      zipcode: 19610,
      role: "Member",
      photoUrl:'https://static01.nyt.com/images/2019/09/29/arts/29eddie-murphy10/29eddie-murphy10-superJumbo-v2.jpg'
    }),
    User.create({
      username: "bill",
      password: "123",
      name: "Bill",
      email: "bill@gmail.com",
      industry: "Real Estate",
      github: "@bill",
      description: paragraph,
      info: "Head Sales",
      looking_for: "product designer",
      challenge_points: 1,
      zipcode: 111100,
      role: "Member",
      photoUrl: "https://media.istockphoto.com/photos/be-so-good-you-become-your-own-source-of-inspiration-picture-id1290528178?b=1&k=20&m=1290528178&s=170667a&w=0&h=ILOZEnHzV2WGCGHWzOl-nIgKsk_-GiysByzZ3ZGIFpk="
    }),
    User.create({
      username: "jamie",
      password: "123",
      name: "jamie",
      email: "jamie@gmail.com",
      industry: "Technology",
      github: "@jamieha",
      description: paragraph,
      info: "Senior Cost Seg Engineer",
      looking_for: "backend developer",
      challenge_points: 3,
      zipcode: 12345,
      role: "Member",
      photoUrl: 'https://media.istockphoto.com/photos/portrait-business-woman-asian-on-blue-background-picture-id1166423321?k=20&m=1166423321&s=612x612&w=0&h=NBAjIIoCtSlT1e2lRRaFN5K0v7wq3mQLXJOEz0MgTYs='
    }),
    User.create({
      username: "stephen",
      password: "123",
      name: "stephen",
      email: "stephen@gmail.com",
      industry: "Technology",
      github: "@stephen",
      description: paragraph,
      info: "Web Communications Developer",
      looking_for: "backend developer",
      challenge_points: 5,
      zipcode: 54321,
      role: "Member",
    }),
    User.create({
      username: "amata",
      password: "123",
      name: "amata",
      email: "amata@gmail.com",
      industry: "Technology",
      github: "@amata",
      description: paragraph,
      info: "Data Engineer",
      looking_for: "front end engineer",
      challenge_points: 3,
      zipcode: 13579,
      role: "Member",
    }),
    User.create({
      username: "patricia",
      password: "123",
      name: "patricia",
      email: "patricia@gmail.com",
      industry: "Technology",
      github: "@patricia",
      description: paragraph,
      info: "Structural Engineer",
      looking_for: "ux researcher",
      challenge_points: 4,
      zipcode: 30293,
      role: "Member",
    }),
    User.create({
      username: "sam",
      password: "123",
      name: "sam",
      email: "sam@gmail.com",
      industry: "Technology",
      github: "@sam",
      description: paragraph,
      info: "Professional Athletic Trainer",
      looking_for: "front end engineer",
      challenge_points: 2,
      zipcode: 90210,
      role: "Member",
      photoUrl: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7438633d-db0e-4de1-9798-088526c6715e.jpg?fit=scale-down&source=next&width=700'
    }),
    User.create({
      username: "lucy",
      password: "123",
      name: "lucy",
      email: "lucy@gmail.com",
      industry: "Government",
      github: "@lucy",
      description: paragraph,
      info: "Social Secuirty Admin",
      looking_for: "back end engineer",
      challenge_points: 6,
      zipcode: 11111,
      role: "Member",
      photoUrl: "https://www.byrdie.com/thmb/UQ6X1oyssVKca543GhansJjFYgw=/735x0/smiling-861cf088a0974d41bbfa9a7f7eddf2e2.jpg"
    }),
    User.create({
      username: "stannie-lim",
      password: "123",
      name: "Stanley",
      email: "Stanley@gmail.com",
      industry: "Technology",
      github: "@stannie-lim",
      description: paragraph,
      info: "Fullstack Engineer",
      looking_for: "students",
      challenge_points: 5,
      zipcode: 30928,
      role: "Member",
      photoUrl:'https://ca.slack-edge.com/T024FPYBQ-USKKA6KT6-511cb9f287f4-512'
    }),
    User.create({
      username: "prof",
      password: "123",
      name: "prof?",
      email: "prof@gmail.com",
      industry: "Education",
      github: "@prof",
      description: paragraph,
      info: "Instructor",
      looking_for: "students",
      challenge_points: 4,
      zipcode: 11123,
      role: "Member",
      photoUrl: 'https://ca.slack-edge.com/T024FPYBQ-U07DRD24A-g120f32133d9-512'
    })
    User.create({
      username: "sean",
      password: "123",
      name: "sean",
      email: "sean@gmail.com",
      industry: "Art and Design",
      github: "@sean",
      description: paragraph,
      info: "UX Designer",
      looking_for: "product managers",
      challenge_points: 6,
      zipcode: 10013,
      role: "Member",
      photoUrl: 'https://www.thewrap.com/wp-content/uploads/2020/10/sean.jpg'
    })    
    User.create({
      username: "leslie",
      password: "123",
      name: "leslie",
      email: "leslie@gmail.com",
      industry: "Social Science",
      github: "@leslie",
      description: paragraph,
      info: "Psychology Resercher",
      looking_for: "fullstack engineers",
      challenge_points: 2,
      zipcode: 12345,
      role: "Member",
      photoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Leslie_Knope_%28played_by_Amy_Poehler%29.png'
    })
    User.create({
      username: "justice",
      password: "123",
      name: "Justice",
      email: "justice@gmail.com",
      industry: "Entertainment and Sports",
      github: "@justice",
      description: paragraph,
      info: "Football Analytics",
      looking_for: "product designers",
      challenge_points: 4,
      zipcode: 19610,
      role: "Member",
      photoUrl:'https://t3.ftcdn.net/jpg/02/99/03/56/360_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg'
    })
    User.create({
      username: "betty",
      password: "123",
      name: "Betty",
      email: "prof@gmail.com",
      industry: "Entertainment and Sports",
      github: "@betty",
      description: paragraph,
      info: "Data Engineer",
      looking_for: "software engineers",
      challenge_points: 1,
      zipcode: 19043,
      role: "Member",
    })
    User.create({
      username: "luka",
      password: "123",
      name: "Luka",
      email: "luka@gmail.com",
      industry: "Finance",
      github: "@luka",
      description: paragraph,
      info: "Data Analytics",
      looking_for: "engineers",
      challenge_points: 3,
      zipcode: 11111,
      role: "Member",
      photoUrl: "https://media.istockphoto.com/photos/portrait-of-a-taiwanese-man-picture-id1149504274"
    })
    User.create({
      username: "michael",
      password: "123",
      name: "michael",
      email: "michael@gmail.com",
      industry: "Finance",
      github: "@michael",
      description: paragraph,
      info: "Data Scientist",
      looking_for: "software engineers",
      challenge_points: 2,
      zipcode: 22222,
      role: "Member",
      photoUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png'
    })
    User.create({
      username: "abey",
      password: "123",
      name: "Abey",
      email: "abey@gmail.com",
      industry: "Sales",
      github: "@abey",
      description: paragraph,
      info: "Backend Engineer",
      looking_for: "frontend engineers",
      challenge_points: 6,
      zipcode: 11123,
      role: "Member",
      photoUrl: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
    })
    User.create({
      username: "bfong",
      password: "123",
      name: "Brian",
      email: "bfong@gmail.com",
      industry: "Legal",
      github: "@bfong",
      description: paragraph,
      info: "Data analyst",
      looking_for: "data engineers",
      challenge_points: 4,
      zipcode: 12343,
      role: "Member",
    })
    User.create({
      username: "qinke",
      password: "123",
      name: "Kiki",
      email: "kiki@gmail.com",
      industry: "Sales",
      github: "@qinke",
      description: paragraph,
      info: "Sales Consultant",
      looking_for: "engineers",
      challenge_points: 4,
      zipcode: 44444,
      role: "Member",
    })
    User.create({
      username: "dwight",
      password: "123",
      name: "dwight",
      email: "dwight@gmail.com",
      industry: "Finance",
      github: "@dwight",
      description: paragraph,
      info: "Resercher",
      looking_for: "engineers",
      challenge_points: 1,
      zipcode: 11203,
      role: "Member",
      photoUrl: "https://cdn.theatlantic.com/thumbor/qf3OZxABtwdkxsPxNl_l-pbFyYY=/2733x1:4028x1296/1080x1080/media/img/mt/2020/10/Dwight_comop/original.jpg"
    })
    User.create({
      username: "stanley",
      password: "123",
      name: "stanley",
      email: "stanley@gmail.com",
      industry: "Sales",
      github: "@stanley",
      description: paragraph,
      info: "Head Sales Rep",
      looking_for: "engineers",
      challenge_points: 1,
      zipcode: 11201,
      role: "Member",
      photoUrl: "https://www.indiewire.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-06-at-10.39.06-AM.png"
    })
    User.create({
      username: "monica",
      password: "123",
      name: "monica",
      email: "monica@gmail.com",
      industry: "Legal",
      github: "@monica",
      description: paragraph,
      info: "Researcher",
      looking_for: "engineers",
      challenge_points: 1,
      zipcode: 11201,
      role: "Member",
      photoUrl: "http://images.fanpop.com/images/image_uploads/Monica-monica-geller-86879_576_824.jpg"
    })
    User.create({
      username: "chandler",
      password: "123",
      name: "chandler",
      email: "chandler@gmail.com",
      industry: "Government",
      github: "@chandler",
      description: paragraph,
      info: "Fullstack Engineer",
      looking_for: "engineers",
      challenge_points: 4,
      zipcode: 11204,
      role: "Member",
      photoUrl: "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg"
    })


  //creating one friends link
  //  const friendslist = await Promise.all([
  //   Friend.create({ user1id: 1, user2id: 2 }),
  //   Friend.create({ user1id: 1, user2id: 2 }),
  //   Friend.create({ user1id: 1, user2id: 2 }),
  //   Friend.create({ user1id: 1, user2id: 2 }),
  //   Friend.create({ user1id: 1, user2id: 2 }),
  //   Friend.create({ user1id: 1, user2id: 2 }),
  // ]);

  async function friendsListCreater(user1idD, user2idD) {
    await Friend.create({user1id: user1idD, user2id: user2idD})
  }

  const friendhelper = new Array(24).fill(1)
  friendhelper.forEach((num, idx) =>{
    let friendhelper2 = new Array(Math.ceil(Math.random()*10))
    let friendhelper3 = []
    for(let i = 0; i<friendhelper2.length; i++){
      let friendNum = Math.ceil(Math.random()*23)+1
      if(!friendhelper3.includes(friendNum)){
        friendhelper3.push(friendNum)
      }
    }
    friendhelper3.forEach(num3 =>{
      friendsListCreater(idx+1,num3)
    })
  })


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
  async function joinUserIndustry(userIdD, industryIdD) {
    await UserIndustry.create({userId: userIdD,industryId: industryIdD})
  }

  // create user skills
  async function joinUserSkill (userIdD, skillIdD) {
    await UserSkill.create({userId: userIdD,skillId: skillIdD})
  }

  joinUserIndustry(1,1)
  joinUserIndustry(1,2)
  joinUserIndustry(3,1)
  joinUserIndustry(1,9)
  joinUserIndustry(5,6)


  const helper = new Array(24).fill(1)
  helper.forEach((num, idx) =>{
    let helper2 = new Array(Math.ceil(Math.random()*6))
    let helper3 = []
    for(let i = 0; i<helper2.length; i++){
      let skillNum = Math.ceil(Math.random()*18)+1
      if(!helper3.includes(skillNum)){
        helper3.push(skillNum)
      }
    }
    helper3.forEach(num3 =>{
      joinUserSkill(idx+1,num3)
    })
  })
  

 //Creating coding challenges
 const codingChallenges = await Promise.all([
  CodingChallenge.create({ level: 1, prompt: 'Create the useMapToUpperCase function - use the Array.protoype.map within the useMapToUpperCase function', description:"Remember, the map method can only be called on arrays (so you may need to convert the argument to an array). Map each element so the strings are all upper case.", solution: "const useMapToUpperCase = str => {return str.split(' ').map((word) => {return word.toUpperCase();})}", codespec: useMapToUpperCase_spec, title: 'useMapToUpperCase', example: `useMapToUpperCase('Keep It Simple')/n returns ['KEEP', 'IT', 'SIMPLE']`
 }),
 CodingChallenge.create({ level: 2, prompt: 'Create the useFilter function - use the Array.prototype.filter method to determine if the string has an "@"', description:'Array.prototype.includes will come in handy to determine if string has an "@"', solution: "const useFilter = arr => {return arr.filter(correctEmail => correctEmail.includes('@'));}", codespec: useFilter_spec, title: 'useFilter', example: `useFilter(['trace.google.com', 'kellyscott2@aol.com', 'helloWorld.com'])/n returns ['kellyscott2@aol.com']`
 }),
 CodingChallenge.create({ level: 3, prompt: "The function findObjPropsHasOwn accepts an object as an argument and returns a string with the name of every key directly attached to the object passed as an argument.", description:"The keys in the string should only be keys attached to the object, not on its internal prototype (aka .proto), to achieve this, use Object.prototype.hasOwnProperty.", solution: "function findObjKeys(obj){Object.keys(obj).map(key =>{return `${key}`}).join(',')}", codespec: findObjectsKey_spec, title: "findObjPropsHasOwn", example: `const obj = { color: 'green' }/n findObjKeys(obj)/n output: 'color'`
}),
CodingChallenge.create({ level: 4, prompt: 'Create the function multiplicationTable that accepts two arguments', description:'The rows X columns represents the dimension of a multiplication table. The return value is a multidimensional or one-dimensional array.', solution: "function multiplicationTable(rows,columns){ let table = []; for (let i = 1; i < rows + 1; i++){} row = [];for (let j = 1; j < columns + 1; j++){row.push(j*i);}table.push(row);}return table;", codespec: multiplicationTable_spec, title: 'multiplicationTable', example:``
}),
CodingChallenge.create({ level: 5, prompt: "Create the alternate function - the alternate function returns function that returns a value every other time it is called.", description:'', solution: "const alternate = (func) => {let count = 1; return function() {if (count %2 === 1){ count++;return func();} else { count++;}};};", codespec: alternate_spec, title:'alternate', example:``
}),
CodingChallenge.create({ level: 6, prompt: 'Create the twice function - the twice function can only invoke the function passed to it a total of two times.', description:'', solution: "const twice = (func) => {et count = 1; return function() {if (count <= 2){ count++;return func();} else { return 0;}};};", codespec: twice_spec, title:'twice', example:``
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
