const router = require('express').Router();
const { exec } = require('child_process');
const fs = require('fs');
const { models: { CodingChallenge, User }} = require('../db');

module.exports = router;

const createUserTestFile = (code, spec) => {
  code = `${code}\n`;
  const testFile = 'testFile.js';

  fs.writeFileSync('testFile.js', code, 'utf8', (err) => { console.log(err) });
  fs.appendFileSync('testFile.js', spec, (err) => { console.log(err) });

  return testFile;
}

const testUserCode = (testFile) => {
    return new Promise((resolve, reject) => {
      exec(`mocha ${testFile} --reporter mochawesome`,
          { timeout: 10000 },
          (err, stdout, stderr) => {
            if (err !== null && stdout === '') {
              const output = stderr !== '' ? stderr : 'Timed out';
              reject(output);
              // reject(stderr || 'Timed out')
            }
            resolve(stdout);
          }
      );
    });
}

const getUserResults = () => {
  try {
    const resultJSON = fs.readFileSync('mochawesome-report/mochawesome.json',
      (err, data) => {
        if (err) throw err
        return data
      }
    )
  
    const resultHTML = fs.readFileSync('mochawesome-report/mochawesome.html',
      (err, data) => {
        if (err) throw err
        return data
      }
    )
    
    const userResults = {
      passes: JSON.parse(resultJSON).stats.passes,
      failures: JSON.parse(resultJSON).stats.failures,
    }
    // return [ resultJSON, userResults];
    return [ resultHTML, userResults];
  }
  catch (err) {
    console.log(err)
  }
}

// GET /api/levelup
// all Coding Challenges page
router.get('/', async (req, res, next) => {
  try {
    res.send(await CodingChallenge.findAll());
  } catch (err) {
    next(err)
  }
})

// POST /api/levelup
// handles -create new code submission
router.post('/', async (req, res, next) => {
  const { userSolution, userId } = req.body;
  var { userlevel } = req.body;

  const user = await User.findOne({
    where: {
      id: userId
    },
  });

  const challenge = await CodingChallenge.findAll({
    where: {
      level: userlevel
    },
  });

  const specFile = challenge[0].codespec;

  try {
    const testFile = await createUserTestFile(userSolution, specFile);        
    await testUserCode(testFile);
    
    // const [ resultJSON, userResult ] = await getUserResults(testFile);
    const [ resultHTML, userResult ] = await getUserResults(testFile);

    // console.log(resultHTML.toString())
    
    if (userResult.failures === 0) { // change back to 0
      userlevel++;
    };

    await user.update({
      challenge_points: userlevel,
    })

    // res.send(resultJSON)
    res.send(resultHTML)
    // res.sendFile('../mochawesome-report/mochawesome-report.html')
  }
  catch (err) {
    res.json(err);
  }
});