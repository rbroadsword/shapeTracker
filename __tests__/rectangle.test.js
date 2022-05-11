import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

  test('Should correctly create a rectangle object with two lengths and two widths', () => {
    const rectangle = new Rectangle(2, 4); 
    expect(rectangle.side1).toEqual(2); 
    expect(rectangle.side2).toEqual(4);  
  }); 

  // test('should correctly determine whether 2 lengths and 2 heights', () => {
  //   const notRectangle = new Rectangle(2, 3); 
  //   expect(notRectangle.checkType()).toEqual("this is not a rectangle"); 
  // }); 

  // test('should correctly determine whether 2 lengths and 2 widths make a rectangle', () => {
  //   const myRectangle = new Rectangle(2, 4); 
  //   expect(myRectangle.checkType()).toEqual("this is a rectangle"); 
  // }); 

  test('should correctly get the area of a rectangle object', () => {
    const rectangle = new Rectangle(3, 5); 
    expect(rectangle.getArea()).toEqual(15); 
  }); 

  test('should correctly get the perimeter of a rectangle object', () => {
    const rectangle = new Rectangle(3, 5); 
    expect(rectangle.getPerimeter()).toEqual(16); 
  })
}); 