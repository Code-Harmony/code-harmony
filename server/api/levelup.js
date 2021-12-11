const router = require('express').Router();
const { exec } = require('child_process');
const fs = require('fs');
const { models: { CodingChallenge }} = require('../db');
module.exports = router;

const specTest = `const {expect} = require('chai')
// const chai = require('chai')
// chai.use(require('sinon-chai'));

//map to upper case level 1
describe('useMapToUpperCase', () => {
    // it('takes a string and returns an array', () => {
    //   const array = useMapToUpperCase('it is raining outside');
    //   expect(Array.isArray(array)).to.be.a(true);
    // });
    it('returns an array and uppercases each word', () => {
      const array = useMapToUpperCase('Keep It Simple');
      // expect(array).to.equal(['KEEP', 'IT', 'SIMPLE']);
      expect(array[0]).to.equal('KEEP');
      expect(array[1]).to.equal('IT');
      expect(array[2]).to.equal('SIMPLE');
    });

    // it('uses Array.prototype.map', () => {
    //   // spyOn(Array.prototype, 'map').and.callThrough();
  
    //   // const array = useMapToUpperCase('make sure to use the map method');
    //   expect(Array.prototype.map).to.have.been.called();
      
    //   // expect(array).to.equal([
    //   //   'MAKE',
    //   //   'SURE',
    //   //   'TO',
    //   //   'USE',
    //   //   'THE',
    //   //   'MAP',
    //   //   'METHOD',
    //   // ]);
    // });
  });`

const createUserTestFile = (code, spec) => {
  console.log('running createUserTestFile')
  code = `${code}\n`;
  const testFile = 'testFile.js';

  fs.writeFileSync('testFile.js', code, 'utf8', (err) => { console.log(err) });

  fs.appendFileSync('testFile.js', spec, (err) => { console.log(err) });

  return testFile;
}

const testUserCode = (testFile) => {
  try {
    console.log('running testUserCode')
    return new Promise((resolve, reject) => {
      exec(`mocha ${testFile} --reporter mochawesome`,
          { timeout: 100000 },
          (err, stdout, stderr) => {
            if (err !== null && stdout === '') {
              // const output = stderr !== '' ? stderr : 'Timed out';
              // reject(output);
              reject(stderr || 'Timed out')
            }
            resolve(stdout);
          }
      );
    });
  }
  catch (err) {
    console.log(err)
  }
}

const getUserResults = () => {
  try {
    console.log('running getUserResults')
    const resultJSON = fs.readFileSync('mochawesome-report/mochawesome.json',
      (err, data) => {
        if (err) throw err
        return data
      }
    )
    console.log('in testUserCode function')
    console.log(JSON.parse(resultJSON))
    
    return resultJSON;
  }
  catch (err) {
    console.log('running getUserResults error')
    console.log(err)
  }
}

// GET /api/levelup
// all Coding Challenges page
router.get('/', async (req, res, next) => {
  try {
    res.send(await CodingChallenge.findAll());
    // res.send('levelup api test')
  } catch (err) {
    next(err)
  }
})

// POST /api/levelup
// handles -create new code submission
router.post('/', async (req, res, next) => {
  const { userSolution } = req.body;
  try {
    const testFile = await createUserTestFile(userSolution, specTest);
    await testUserCode(testFile);
    const userResult = await getUserResults(testFile);
    console.log('in post levelup')
    console.log(userResult);
    // res.send(muPromise);
    res.json(userResult);

  }
  catch (error) {
    next(error);
  }
});