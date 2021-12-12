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
  
  //use Filter level 2
  describe('useFilter', () => {
    it('takes an array and returns an array', () => {
      const array = useFilter(['kdsd@aol.com', 'test@apple.com']);
      expect(Array.isArray(array)).toBe(true);
    });
    it('returns all words in the array that have an @', () => {
      const array = useFilter([
        'emilie.io',
        'trace.google.com',
        'kellyscott2@aol.com',
        'helloWorld.com',
        'test@apple.com',
        'snowman@iceland.com',
      ]);
      expect(array).toEqual([
        'kellyscott2@aol.com',
        'test@apple.com',
        'snowman@iceland.com',
      ]);
    });
    it('uses Array.prototype.filter', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();
  
      const array = useFilter([
        'omri@aol.com',
        'jess@fs.com',
        'test.com',
        'myEmail.com',
      ]);
      expect(Array.prototype.filter).toHaveBeenCalled();
      expect(array).toEqual(['omri@aol.com', 'jess@fs.com']);
    });
  });

  //find object keys level 3
describe('findObjKeys', () => {
    const rectanglePrototype = {
      getArea: function () {
        return this.height * this.width;
      },
    };
    function rectangle(color, height, width) {
      const rectangleInstance = Object.create(rectanglePrototype);
  
      rectangleInstance.color = color;
      rectangleInstance.height = height;
      rectangleInstance.width = width;
  
      return rectangleInstance;
    }
    it('prints out the key', () => {
      const greenRectangle = { color: 'green' };
  
      expect(findObjKeys(greenRectangle)).toBe('color');
    });
  
    it("prints out the object's keys, comma delimited", () => {
      const yelloRectangle = { color: 'yellow', height: 8, width: 5 };
  
      expect(findObjKeys(yelloRectangle)).toBe('color, height, width');
    });
  
    it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
      const blueRectangle = rectangle('blue', 5, 3);
  
      expect(findObjKeys(blueRectangle)).toBe('color, height, width');
    });
  
    it('it uses `Object.keys`', () => {
      const purpleRectangle = rectangle('purple', 7, 2);
      spyOn(Object, 'keys').and.callThrough(); // checks if Object.keys is called
  
      findObjKeys(purpleRectangle);
  
      expect(Object.keys).toHaveBeenCalled();
      // Note: do no use Object.hasOwnProperty.call(purpleRectangle);
    });
  });

//multiplication table level 4
  describe('multiplicationTable', () => {
    it('returns an array', () => {
      const table = multiplicationTable(5, 10);
  
      expect(Array.isArray(table)).toBe(true);
    });
  
    it('every row is an array and the first argument represents the total amount of rows in the table', () => {
      const smallTable = multiplicationTable(3, 0);
      const mediumTable = multiplicationTable(6, 0);
      const largeTable = multiplicationTable(9, 0);
  
      expect(smallTable).toEqual([[], [], []]);
      expect(mediumTable).toEqual([[], [], [], [], [], []]);
      expect(largeTable).toEqual([[], [], [], [], [], [], [], [], []]);
    });
  
    it('in a 1x3 grid (rows X columns ), the column values start at 1 and increment by 1', () => {
      const table = multiplicationTable(1, 3);
  
      expect(table).toEqual([[1, 2, 3]]);
    });
  
    it('in a 2x3 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
      const rows = 2;
      const columns = 3;
      const table = multiplicationTable(rows, columns);
  
      expect(table).toEqual([[1, 2, 3], [2, 4, 6]]);
    });
  
    it('in a 4x8 grid (rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
      const rows = 4;
      const columns = 8;
  
      const table = multiplicationTable(rows, columns);
  
      expect(table).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8],
        [2, 4, 6, 8, 10, 12, 14, 16],
        [3, 6, 9, 12, 15, 18, 21, 24],
        [4, 8, 12, 16, 20, 24, 28, 32],
      ]);
    });
  
    it('in a 0x0 grid (rows X columns), an empty array is returned', () => {
      const table = multiplicationTable(0, 0);
      expect(table).toEqual([]);
    });
  });


  //alternate function level 5
  describe('alternate', () => {
    let message;
    beforeEach(() => {
      message = '';
    });
  
    it('should return a function object', () => {
      const funcReturned = alternate(() => {
        message += 'hey';
      });
      expect(typeof funcReturned === 'function').toBe(true);
    });
  
    it("should add 'hey' to message on alternate function calls", () => {
      const sayHeyOnAlternateCalls = alternate(() => {
        message += 'hey';
      });
      sayHeyOnAlternateCalls();
      expect(message).toBe('hey');
      sayHeyOnAlternateCalls();
      expect(message).toBe('hey');
      sayHeyOnAlternateCalls();
      expect(message).toBe('heyhey');
      sayHeyOnAlternateCalls();
      expect(message).toBe('heyhey');
    });
  });
  
  //twice function level 6
  describe('twice', () => {
    it('should return a function object', () => {
      const funcReturned = twice(() => {
        return "I'm happy I completed Foundations!";
      });
      expect(typeof funcReturned === 'function').toBe(true);
    });
  
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
  
      expect(returnTen()).toBe(10);
    });
  
    it('can be called twice', () => {
      let total = 0;
      const returnTen = twice(() => {
        return 10;
      });
      total += returnTen();
      total += returnTen();
      expect(total).toBe(20);
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
      expect(calledMoreThanTwoTimes).toBe(0);
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
      expect(calledMoreThanTwoTimes).toBe(0);
    });
  });