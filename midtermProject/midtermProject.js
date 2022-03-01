//Name: Ryan Smith
//Project Name: Circe's Cauldron
//Class: Introduction to Interactive Media Section 003
//Date of Submission: March 8, 2022

//declaring the variable for the x-Coordinate of each item when it
//appears at the top of the screen and initializing each items's 
//y-Coordinate such that it appears like it's falling from above
let foodX; 
let foodY = 0;

//declaring variables that determine how much good & bad foods are
//drawn
let goodFoods;
let badFoods;

function setup() {
    createCanvas(700, 500);
    
    //declaring the array to hold the food objects
    let foodArray = [];
  
    //Randomly determing how much of each category is drawn
    //with 5 total foods drawn and a minimum of 1 good food drawn
    goodFoods = int(random(0,4));
    badFoods = 5 - goodFoods;
    
    //for loop to create new good food objects
    //might add if-then conditional to make this shorter
    for (let i = 0; i < goodFoods; i++) {
    
      //randomly generating the x-Coordinate of a given good food
      foodX = random (width + 10, width - 10);
    
      //drawing the good food and adding each to an array
      foodArray.push(new GoodFood(foodX, foodY));
    }
  
    for (let n = 0; n < badFoods; n ++) {
      //randomly generating the x-Coordinate of a given good food
      foodX = random (width + 10, width - 10);
    
      //drawing the good food and adding each to an array
      foodArray.push(new BadFood(foodX, foodY));
    }
}
//creating a constant for the fixed y-Coordinate of the cauldron 
const cauldronY = 400;

//class used to draw good food types
class GoodFood {
  
  constructor (foodX, foodY) {
    this.x = foodX;
    this.y = foodY;
  }
  
  drawFood() {
  
  let foodType = random(0,3);
  
  //representing food item type using color (e.g. red might become
  //bread);
  if (this.type === 0) {
    fill(230, 210, 150);
  } else {
    if (this.type === 1) {
      fill(120, 67,200);
      } else {
      if (this.type === 2) {
        fill(35,203,203);
      }
    }
  
  //drawing a circle to represent a food item
  circle(this.x,this.y,50);
  }
}
}
//class used to draw good food types
class BadFood {
  
  constructor (foodX, foodY) {
    this.x = foodX;
    this.y = foodY;
  }
  
  drawFood() {
    //representing bad food item type using color (e.g. red might become
    //bread);
    fill(255, 37, 73);
    
    //drawing a circle to represent a food item
    circle(this.x,this.y,50);
  }
}

function draw() {
  background(220);
  
  //drawing a red line to represent the cauldron's position
  stroke(255,0,0);
  line(0,cauldronY,width,cauldronY);
  
  

}
