function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
}

function drawGrapes(x,y) {
  y = y - 40 // to align with other fruits in the row
  let radius = 25;
  fill(128,0,128);
  circle(x,y,radius);
  circle(x - radius, y, radius);
  circle(x + radius, y, radius);
  circle(x - (1.5*radius), y - radius, radius);
  circle(x - (radius/2), y - radius, radius);
  circle(x + (radius/2), y - radius, radius);
  circle(x + (1.5*radius), y - radius, radius);
  circle(x - (radius/2), y + radius, radius);
  circle(x + (radius/2), y + radius, radius);
  circle(x,y + (2*radius), radius);
  fill(139, 69, 19);
  rect(x-5, y - (2.25*radius), 10, 20);
}

function drawWatermelon(x,y) {
  y = y - 50; //to align with other fruits in the row
  fill(50,205,50);
  arc(x,y,150,150,radians(315),radians(135));
  fill(220,20,60);
  arc(x,y,120,120,radians(315),radians(135));
}

function drawCherries(x,y) {
  fill(255,0,0);
  circle(x - 20, y, 50);
  circle(x + 40, y, 50);
  stroke(0);
  line(x + 35, y - 25, x,y - 70);
  line(x - 20, y - 25, x, y - 70);
  noStroke();
  fill(50,205,50);
  triangle (x, y - 70, x - 10, y - 90, x - 20, y - 90);
}

function drawOrange(x,y) {
  y = y - 30 //to align with other fruits in the row
  fill(255,140,0);
  circle(x,y, 100);
  fill(139, 69, 19);
  circle(x, y - 40, 10);
}

function drawApple(x,y) {
  y = y - 20 //to align with other fruits in the row
  fill(220,20,60);
  noStroke();
  circle(x-20,y,100);
  circle(x + 20,y,100);
  fill(139, 69, 19);
  triangle(x,y-45,x+15,y-60, x+30, y-60);
}

function drawLemon(x,y) {
  fill(255,255,0);
  noStroke()
  ellipse(x,y,150,100);
  ellipse(x-75,y,25,25);
  ellipse(x+75, y,25,25);
}
