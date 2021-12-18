const {expect} = require('chai')

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
  
      expect(findObjKeys(greenRectangle)).to.equal('color');
    });
  
    it("prints out the object's keys, comma delimited", () => {
      const yelloRectangle = { color: 'yellow', height: 8, width: 5 };
  
      expect(findObjKeys(yelloRectangle)).to.equal('color, height, width');
    });
  
    it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
      const blueRectangle = rectangle('blue', 5, 3);
  
      expect(findObjKeys(blueRectangle)).to.equal('color, height, width');
    });
  
    // it('it uses `Object.keys`', () => {
    //   const purpleRectangle = rectangle('purple', 7, 2);
    //   // spyOn(Object, 'keys').and.callThrough(); // checks if Object.keys is called
  
    //   findObjKeys(purpleRectangle);
  
    //   expect(Object.keys).to.have.been.called();
    //   // Note: do no use Object.hasOwnProperty.call(purpleRectangle);
    // });
  });