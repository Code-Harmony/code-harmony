const {expect} = require('chai')

//level 6

describe('twice', () => {
    /*
    it('should return a function object', () => {
      const funcReturned = twice(() => {
        return "I'm happy I completed Foundations!";
      });
      expect(typeof funcReturned === 'function').toBe(true);
    }); */
  
    it('calls the function argument a maximum of two times', () => {
      const returnTen = jasmine.createSpy('returnTen', () => {
        return 10;
      });
  
      const returnVal = twice(returnTen);
  
      returnVal();
      returnVal();
      returnVal();
  
      expect(returnTen.calls.count()).toBe(2);
    });
  
    it('returns the number value 10 when called', () => {
      const returnTen = twice(() => {
        return 10;
      });
  
      expect(returnTen()).to.be(10);
    });
  
    it('can be called twice', () => {
      let total = 0;
      const returnTen = twice(() => {
        return 10;
      });
      total += returnTen();
      total += returnTen();
      expect(total).to.be(20);
    });
  
    it('returns 0 if called more than 2 times', () => {
      let total = 0;
      const returnTen = twice(() => {
        return 10;
      });
      let calledMoreThanTwoTimes;
  
      total += returnTen();
      total += returnTen();
      total += returnTen();
      total += returnTen();
      calledMoreThanTwoTimes = returnTen();
  
      expect(total).toBe(20);
      expect(calledMoreThanTwoTimes).to.be(0);
    });
  
    it('works on functions that return a random number (instead of just 10) ', () => {
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      let total = 0;
      let calledMoreThanTwoTimes;
  
      const returnRandomNum = twice(() => {
        return randomNumber;
      });
  
      total += returnRandomNum();
      total += returnRandomNum();
      total += returnRandomNum();
      total += returnRandomNum();
      calledMoreThanTwoTimes = returnRandomNum();
  
      expect(total).toBe(randomNumber * 2);
      expect(calledMoreThanTwoTimes).to.be(0);
    });
  });