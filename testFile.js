function multiplicationTable(rows,columns){ let table = []; for (let i = 1; i < rows + 1; i++){} row = [];for (let j = 1; j < columns + 1; j++){row.push(j*i);}table.push(row);}return table;
const {expect} = require('chai')

// level 4
describe('multiplicationTable', () => {
   /* it('returns an array', () => {
      const table = multiplicationTable(5, 10);
  
      expect(Array.isArray(table)).toBe(true);
    }); */
  
    it('every row is an array and the first argument represents the total amount of rows in the table', () => {
      const smallTable = multiplicationTable(3, 0);
      const mediumTable = multiplicationTable(6, 0);
      const largeTable = multiplicationTable(9, 0);
      
      expect(smallTable[2]).to.equal([]);
      expect(mediumTable[3]).to.equal([]);
      expect(largeTable[8]).to.equal([]);
    });
  
    // it('in a 1x3 grid (rows X columns ), the column values start at 1 and increment by 1', () => {
    //   const table = multiplicationTable(1, 3);
  
    //   expect(table[0][0]).to.equal(1);
    //   expect(table[0][1]).to.equal(2);
    //   expect(table[0][2]).to.equal(3);
    // });
  
    // it('in a 2x3 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    //   const rows = 2;
    //   const columns = 3;
    //   const table = multiplicationTable(rows, columns);
  
    //   expect(table[0][0]).to.equal(1);
    //   expect(table[1][1]).to.equal(4);
    //   expect(table[1][2]).to.equal(6);
    // });
  
    // it('in a 4x8 grid (rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    //   const rows = 4;
    //   const columns = 8;
  
    //   const table = multiplicationTable(rows, columns);
  
    //   expect(table[0][0]).to.equal(1);
    //   expect(table[1][1]).to.equal(4);
    //   expect(table[3][4]).to.equal(20);
    // });
  
    // it('in a 0x0 grid (rows X columns), an empty array is returned', () => {
    //   const table = multiplicationTable(0, 0);
    //   expect(table).to.equal([]);
    // });
  });