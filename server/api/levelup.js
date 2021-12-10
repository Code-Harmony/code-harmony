const router = require('express').Router();
const { exec } = require('child_process');
const fs = require('fs');
const { models: { CodingChallenge }} = require('../db');
module.exports = router;

const specTest = `const {expect} = require('chai')
//map to upper case level 1
describe('useMapToUpperCase', () => {
    it('takes a string and returns an array', () => {
      const array = useMapToUpperCase('it is raining outside');
      expect(Array.isArray(array)).toBe(true);
    });
    it('returns an array and uppercases each word', () => {
      const array = useMapToUpperCase('Keep It Simple');
      expect(array).toEqual(['KEEP', 'IT', 'SIMPLE']);
    });
  
    it('uses Array.prototype.map', () => {
      spyOn(Array.prototype, 'map').and.callThrough();
  
      const array = useMapToUpperCase('make sure to use the map method');
      expect(Array.prototype.map).toHaveBeenCalled();
      expect(array).toEqual([
        'MAKE',
        'SURE',
        'TO',
        'USE',
        'THE',
        'MAP',
        'METHOD',
      ]);
    });
  });`

const testUserCode = async (code, spec) => {
  code = `${code}\n`;
  const testFile = 'testFile.js';

  fs.writeFileSync('testFile.js', code, 'utf8', (err) => { console.log(err) });

  fs.appendFileSync('testFile.js', spec, (err) => { console.log(err) });

  await new Promise((resolve, reject) => {
    exec(`mocha ${testFile} --reporter mochawesome`,
    { timeout: 10000 },
    (err, stdout, stderr) => {
      if (err !== null && stdout === '') {
        // const output = stderr !== '' ? stderr : 'Timed out';
        // reject(output);
        reject(stderr || 'Timed out')
      }
      resolve(stdout);
    });
  });

  const resultJSON = fs.readFileSync('mochawesome-report/mochawesome.json', (err, data) => {
    if (err) throw err
    return data
  })
  console.log('in testUserCode function')
  console.log(JSON.parse(resultJSON))

  return resultJSON;

}

// GET /api/levelup
// all levelup page
router.get('/', async (req, res, next) => {
  try {
    // res.send(await CodingChallenge.findAll());
    res.send('levelup api test')
  } catch (err) {
    next(err)
  }
})

// POST /api/levelup
// handles -create new code submission
router.post('/', async (req, res, next) => {
  const { userSolution } = req.body;
  try {
    // const testData = {
    //   code: userSolution,
    //   spec: specTest,
    // }
    const muPromise = testUserCode(userSolution, specTest);
    console.log('in post levelup')
    console.log(muPromise);
    // res.send(muPromise);
    res.json(muPromise)
    // const testDataObj = JSON.parse(testData);
    // const code = JSON.parse(userSolution)
  }
  catch (error) {
    next(error);
  }
});



