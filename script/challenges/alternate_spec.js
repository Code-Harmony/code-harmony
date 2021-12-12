const {expect} = require('chai')

//level 5
describe('alternate', () => {
  /*  let message;
    beforeEach(() => {
      message = '';
    });
    */
  
    it('should return a function object', () => {
      const funcReturned = alternate(() => {
        message += 'hey';
      });
      expect(typeof funcReturned === 'function').to.be.a(true);
    });
  
    it("should add 'hey' to message on alternate function calls", () => {
      const sayHeyOnAlternateCalls = alternate(() => {
        message += 'hey';
      });
      sayHeyOnAlternateCalls();
      expect(message).to.be('hey');
      sayHeyOnAlternateCalls();
      expect(message).to.be('hey');
      sayHeyOnAlternateCalls();
      expect(message).to.be('heyhey');
      sayHeyOnAlternateCalls();
      expect(message).to.be('heyhey');
    });
  });