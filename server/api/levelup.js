const router = require('express').Router();
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

// POST /api/levelup
// handles -create new code submission
router.post('/', async (req, res, next) => {
  const { userSolution } = req.body;
  try {
    const testData = {
      code: userSolution,
      spec: specTest,
    }
    // const testDataObj = JSON.parse(testData);
    // const code = JSON.parse(userSolution)
    console.log(typeof testData)
    // console.log(testData)
    // console.log(userSolution.suit)
    const error = testData.suites;
    console.log(error);
  }
  catch (error) {
    next(error);
  }
});