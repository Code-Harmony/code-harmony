const useMapToUpperCase = (string) => string.split(' ').map(x => x.toUpperCase());
const {expect} = require('chai')
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
  });