export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  geArea() {
    return Math.PI * this.radius * this.radius;
  }
}
