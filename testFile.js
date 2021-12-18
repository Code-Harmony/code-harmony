console.log('hi')
const {expect} = require('chai')

  //use Filter level 2
  describe('useFilter', () => {
    /*it('takes an array and returns an array', () => {
      const array = useFilter(['kdsd@aol.com', 'test@apple.com']);
      expect(Array.isArray(array)).toBe(true);
    }); */
    it('returns all words in the array that have an @', () => {
      const array = useFilter([
        'emilie.io',
        'trace.google.com',
        'kellyscott2@aol.com',
        'helloWorld.com',
        'test@apple.com',
        'snowman@iceland.com',
      ]);
        expect(array[0]).to.equal('kellyscott2@aol.com');
        expect(array[1]).to.equal('test@apple.com');
        expect(array[2]).to.equal('snowman@iceland.com');
      });
      
    it('uses Array.prototype.filter', () => {
      // spyOn(Array.prototype, 'filter').and.callThrough();
  
      const array = useFilter([
        'omri@aol.com',
        'jess@fs.com',
        'test.com',
        'myEmail.com',
      ]);
      //expect(Array.prototype.filter).toHaveBeenCalled();
      expect(array[0]).to.equal('omri@aol.com');
      expect(array[1]).to.equal('jess@fs.com');
    });
  });