const {db, models: {User, Chat, Message, UserDetail, Skill, Industry, UserSkill, UserIndustry, Project, ProjectMember,CodingChallenge, UserSolution, ChallengeComments} } = require('../server/db');

const skills = ["Art and Design", "Technology", "Healthcare", "Entertainment and Sports", "Legal", "Social Science", "Finance", "Sales", "Real Estate", "Education","Government"]

const industries = ["Python", "JavaScript", "C#", "C", "C++", "GO", "R", "Swift", "PHP", "Assembly", "Visual Basic", "HTML", "CSS", "Angular", "React", "Elm", "TypeScript", "jQuery", "Vue", "Front End", "Back End", "Database"]

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  //Creating sample User Profile
  const userDetails = await Promise.all([
    UserDetail.create({ name: 'cody', email: 'cody@gmail.com', job:'HR', github: '@cody', description:'Fullstack engineer', looking_for:'product designer', challenge_points: 3, address:'brooklyn', image:'url'
   }),
   UserDetail.create({ name: 'murphy', email: 'murphy@gmail.com', job:'FinanceBro', github: '@murphy', description:'Fullstack engineer', looking_for:'product designer', challenge_points: 1, address:'manhattan', image:'url'
  }),
])

  //Creating Markets
  await Promise.all(
    industries.map(type => {
      return(
        Industry.create({name:type})
      )
    })
  )

  //Creating Languages
await Promise.all(
    skills.map(type => {
      return(
        Skill.create({name:type})
      )
    })
  )


  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      billy: users[1]
    }
  }
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

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
