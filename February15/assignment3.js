const NUMBEROFLAYERS = 4;
const NUMBEROFCOLUMNS = 6;
const NUMBEROFROWS = 5;
let centerX = 50;
let centerY = 50;

function setup() {
  createCanvas(600, 500);
}
class concentricSquare {
  constructor(centerX, centerY) {
    this.x = centerX;
    this.y = centerY;
  }
  
  drawSquares() {
    let SIDELENGTH = 100;
    rectMode(CENTER);
    for (let i = 0; i < random(NUMBEROFLAYERS); i += 1) {
      fill(random(255),random(255),random(255));
      square(this.x,this.y,SIDELENGTH);
      SIDELENGTH -= 25;
    }
  }
  
  toTheRight() {
    this.x += 100;
  }
  
  downward(y) {
    this.y += 100*y;
  }
}

function draw() {
  frameRate(5);
  for (let row = 0; row < NUMBEROFROWS; row += 1) {
    let square1 = new concentricSquare(centerX,centerY);
    square1.downward(row);
    for (let column = 0; column < NUMBEROFCOLUMNS; column +=1) {
      square1.drawSquares();
      square1.toTheRight();
  }
  }
}
