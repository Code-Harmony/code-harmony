const {expect} = require('chai')
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
  });