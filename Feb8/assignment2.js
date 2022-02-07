function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
}

function drawGrapes(x,y) {
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
  fill(50,205,50);
  arc(x,y,150,150,radians(315),radians(135));
  fill(220,20,60);
  arc(x,y,120,120,radians(315),radians(135));
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  drawCherries(150,250);
}

function drawGrapes(x,y) {
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
  fill(50,205,50);
  arc(x,y,150,150,radians(315),radians(135));
  fill(220,20,60);
  arc(x,y,120,120,radians(315),radians(135));
}

function drawCherries(x,y) {
  circle(x - 20, y, 100);
  circle(x + 20, y, 100);
  line(x - 20,y + 100, x, y + 200);
}
