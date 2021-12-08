const {db, models: {User, Skill, Industry, UserSkill, UserIndustry, CodingChallenge, UserSolution, ChallengeComments, Friend} } = require('../server/db');

const industries = ["Art and Design", "Technology", "Healthcare", "Entertainment and Sports", "Legal", "Social Science", "Finance", "Sales", "Real Estate", "Education","Government"]

const skills = ["Python", "JavaScript", "C#", "C", "C++", "GO", "R", "Swift", "PHP", "Assembly", "Visual Basic", "HTML", "CSS", "Angular", "React", "Elm", "TypeScript", "jQuery", "Vue", "Front End", "Back End", "Database"]

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //creating one friends link
  const friendslist = await Promise.all([
    Friend.create({ user1id: 2, user2id: 1  }),
    Friend.create({ user1id: 1, user2id: 2  }),

  ])

//Creating Industries
  await Promise.all(
    industries.map(type => {
      return(
        Industry.create({name:type})
      )
    })
  )

//Creating Skills
await Promise.all(
    skills.map(type => {
      return(
        Skill.create({name:type})
      )
    })
  )

   // Creating Users 
   const users = await Promise.all([
    User.create({ username: 'cody', password: '123', name: 'cody', email: 'cody@gmail.com', industry: null, github: '@cody', description: null, looking_for:'product designer', challenge_points: 3, zipcode: 10025, image:'url', talkjsobject:{ name: 'cody', image:'url', role:'member,', description: null } }),
    User.create({ username: 'murphy', password: '123', name: 'murphy', email: 'murphy@gmail.com', industry: null, github: '@murphy', description: null, looking_for:'product designer', challenge_points: 1, zipcode: 19610, image:'url' ,talkjsobject:{ name: 'murphy', image:'url', role:'member', description: null } }),
  ]) 

//Creating UserIndustries join
  async function joinUserIndustry(userId, industryId) {
    const userIndustry = await UserIndustry.create({
      userId: userId,
      industryId: industryId,
  })
  return userIndustry;
  }

  joinUserIndustry(1,3);
  joinUserIndustry(2,6);

  //Creating UserSkills join
  async function joinUserSkills(userId, skillId) {
    const userSkill = await UserSkill.create({
      userId: userId,
      skillId: skillId,
  })
  return userSkill;
  }

  joinUserSkills(1,3);
  joinUserSkills(2,6);


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

  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()

module.exports = seed
