//declaring the constants that will used to determine the maximum amount
//of squares in one set, the amount of columns going from left to right, //and the amount of rows from top to bottom, respectively
const NUMBEROFLAYERS = 4;
const NUMBEROFCOLUMNS = 6;
const NUMBEROFROWS = 5;

//Initializing the center of the first square to be offset a little from //origin
let centerX = 50;
let centerY = 50;

function setup() {
  createCanvas(600, 500);
}

//The class for creating each set of concentric squares
class concentricSquare {
  //passing the current center coordinates to the constructor so it
  //knows where to draw the current set of squares
  constructor(centerX, centerY) {
    this.x = centerX;
    this.y = centerY;
  }

  //function to draw each set of squares
  drawSquares() {
    //the sidelength of each outer square is 100
    let SIDELENGTH = 100;
    rectMode(CENTER);

    //for loop to go through drawing the squares starting with the
    //outermost one and ending with the inner most one; the number of
    //layers is randomly decided, so this may only result in the outer
    //squre. The color of each layer is also random.
    for (let i = 0; i < random(NUMBEROFLAYERS); i += 1) {
      fill(random(255), random(255), random(255));
      square(this.x, this.y, SIDELENGTH);

      //This makes sure that each inner square has a smaller area than
      //the one before it.
      SIDELENGTH -= 25;
    }
  }

  //This function moves the current center's x coordinates to the right
  //100.
  toTheRight() {
    this.x += 100;
  }

  //This function moves the current center's y coordinates downward and
  //the amount is determined by how many rows have been drawn already,
  //as seen below
  downward(rownumber) {
    this.y += 100 * rownumber;
  }
}

function draw() {
  //slowing down the frameRate for a more pleasing effect
  frameRate(5);

  //nested or loop that draws a square every 100 units going from left
  //to right then goes down a row and repeats until the canvas is full
  for (let row = 0; row < NUMBEROFROWS; row += 1) {
    let square1 = new concentricSquare(centerX, centerY);
    square1.downward(row);
    for (let column = 0; column < NUMBEROFCOLUMNS; column += 1) {
      square1.drawSquares();
      square1.toTheRight();
    }
  }
}
