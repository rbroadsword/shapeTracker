import Square from '../src/js/square.js'; 


describe('Square', () => {

  test("should correctly create a square object with four lengths", () => {
    const square = new Square(2, 2); 
    expect(square.side1).toEqual(2); 
    expect(square.side2).toEqual(2); 
  }); 

  test('should correctly get the area of a square object', () => {
    const square = new Square(5, 5); 
    expect(square.getArea()).toEqual(25); 
  }); 

  test('should correctly get the perimeter of a square objesct', () => {
    const square = new Square(5, 5); 
    expect(square.getPerimeter()).toEqual(20); 
  })

  // test('Should correctly determine whether 4 lengths are not a square', () => {
  //   const notSquare = new Square(3, 2, 5, 3); 
  //   expect(notSquare.checkType()).toEqual("not a square"); 
  // });
  
  // test('Should correctly determine whether four lengths make a square', () => {
  //   const mySquare = new Square(2, 2, 2, 2)
  //   expect(mySquare.checkType()).toEqual("this is a square"); 
  // }); 
}); 