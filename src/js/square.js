export default class Square { 
  constructor (side1, side2) {
    this.side1 = side1; 
    this.side2 = side2;  
  }

  getArea() {
return this.side1 * this.side2; 
  }
  // checkType() {
  //   if ((this.side1 === this.side2) && (this.side1 === this.side3) && (this.side1 === this.side4)) {
  //     return "this is a square"; 
  //   } else {
  //     return "not a square"; 
  //   }
  // }
}