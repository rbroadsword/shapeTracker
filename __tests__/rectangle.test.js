import Rectangle from './../src/rectangle.js';

describe('Rectangle', () => {

  test('Should correctly create a rectangle object with two lengths and two widths', () => {
    const rectangle = new Rectangle(2, 4, 2, 4); 
    expect(rectangle.side1).toEqual(2); 
    expect(rectangle.side2).toEqual(4); 
    expect(rectangle.side3).toEqual(2); 
    expect(rectangle.side4).toEqual(4); 
  }); 
}); 