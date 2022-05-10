import Square from './../src/square.js'; 


describe('Square', () => {

  test("should correctly create a square object with four lengths", () => {
    const square = new Square(2, 2, 2, 2); 
    expect(square.side1).toEqual(2); 
    expect(square.side2).toEqual(2); 
    expect(square.side3).toEqual(2); 
    expect(square.side4).toEqual(2); 
  }); 
}); 