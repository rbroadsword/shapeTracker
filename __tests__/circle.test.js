import Circle from "../src/js/circle.js";

describe("Circle", () => {
  test("should correctly create a circle object with a radius", () => {
    const circle = new Circle(5);
    expect(circle.radius).toEqual(5);
  });

  test("");
});
