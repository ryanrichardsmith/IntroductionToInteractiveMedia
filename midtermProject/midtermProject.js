//Name: Ryan Smith
//Project Name: Find the Fish!
//Class: Introduction to Interactive Media Section 003
//Date of Submission: March 8, 2022

function preload() {
  //loading the image from the internet to be used as the
  //backdrop
  scenery = loadImage(
    "https://thumbs.dreamstime.com/b/underwater-cartoon-flat-background-fish-silhouette-sand-seaweed-coral-ocean-sea-life-cute-design-underwater-cartoon-flat-121517052.jpg"
  );

  //loading the sound effects for correct and wrong guesses
  wrong = loadSound("wrong.mp3");
  correct = loadSound("correct.mp3");
}

//declaring the variable used to change between the instruction
//& initial drawing (0), game play (1), and game over (2) states
let state = 0;

//declaring the offset that ensures each fish is drawn decently
//within the frame
const offset = 30;

//declaring the variable used to store the player's score based
//on how many correct guesses they get before they lose
let score = 0;

function setup() {
  
  //creating the backdrop
  createCanvas(600, 400);
  image(scenery, 0, 0, 600, 400);

  //declaring the constant used to place the lines of the
  //instructions at the same x coordinate
  const textXPos = 10;

  //displaying the instructions
  textFont("Rockwell", 50);
  text("Instructions", 150, 50);
  textFont("Rockwell", 18);
  text(
    "You are a fisher looking for a good catch from the local lake.",
    textXPos,
    100
  );
  text("On each screen, some fish will randomly appear.", textXPos, 125);
  text("However, all of them are fake, except one.", textXPos, 150);
  text(
    "The real fish is a slightly different color so keep a sharp eye!", textXPos, 175);
  text("Use the mouse to double click on the real fish on its center.", textXPos, 200);
  text("But be warned: If you click on the fake one, you will be poisoned.", textXPos, 225);
  text("Click the mouse anywhere to continue.", textXPos, 250);
}

//since I do not want the fish to be drawn multiple times a
//second, I decided to not use draw
function draw() {}

//creating a class to draw each fish using randomly generated
//x and y coordinates as well as colors
class drawFish {
  constructor(xCoordinate, yCoordinate, color) {
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.fill = color;
  }

  //using shapes to draw the fish at random positions
  draw() {
    fill(this.fill);
    triangle(
      this.x - 20,
      this.y,
      this.x - 75,
      this.y + 20,
      this.x - 75,
      this.y - 20
    );
    ellipse(this.x, this.y, 100, 50);
    fill(255);
    circle(this.x + 30, this.y, 20);
    fill(0);
    circle(this.x + 30, this.y, 10);
  }
}

//Using mouseClicked() to move between states mentioned above
function mouseClicked() {
  
  //game play state
  if (state === 0) {
    createCanvas(600, 400);
    image(scenery, 0, 0, 600, 400);

    //randomly generating the color of the regular fish
    fishColor = random(50, 255);

    //using a for loop to randomly assign an x and y coordinate
    //to the 'center' of each of the 6 regular fish
    for (n = 0; n < 7; n++) {
      fishX = random(offset, width - offset);
      fishY = random(offset, height - offset);

      //using the class's method to draw the fish
      fish = new drawFish(fishX, fishY, fishColor);
      fish.draw();
    }

    //assigning random x and y coordinates and a slightly
    //different color to the unique fish and using the same
    //class methods to draw it
    uniqueFishX = random(offset, width - offset);
    uniqueFishY = random(offset, height - offset);
    fish = new drawFish(uniqueFishX, uniqueFishY, fishColor - 20);
    fish.draw();

    //changing the state to the one where the player picks a
    //fish (1) and their decision is determined as right or
    //wrong.
    state++;

    //Determining whether the player clicked close enough to
    //the fish's center to win a point
  } else if (
    state === 1 &&
    dist(uniqueFishX, uniqueFishY, mouseX, mouseY) < 50
  ) {
    //updating the player's score if they clicked the right
    //fish
    score++;

    //playing the sound effect for a correct guess
    correct.play();

    //reverting the state back to the initial game play stage
    //where the fish are drawn
    state = 0;

    //Determining whether the player clicked too far away from
    //the fish's center to win a point
  } else if (
    state === 1 &&
    dist(uniqueFishX, uniqueFishY, mouseX, mouseY) > 50
  ) {
    //if the player clicked the wrong fish, it switches to the
    //game over state
    state = 2;

    //playing sound effect for wrong guesses
    wrong.play();

    //changing background to red, signalling the game is over,
    //displaying the final score and prompting the user to           //restart
    background(255, 0, 0);
    textFont("Rockwell", 50);
    text("YOU HAVE PERISHED", 25, 50);
    text("GAME OVER", 130, 100);
    text("Score: " + score, 190, 200);
    text("Click the mouse", 25, 300);
    text("anywhere to restart", 25, 340);

    //if the user chooses to restart, the state reverts back
    //to the initial gameplay one and the score is reset.
    state = 0;
    score = 0;
  }
}
