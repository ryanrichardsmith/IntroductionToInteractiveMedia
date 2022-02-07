function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
  drawCherries(100,250);
  drawWatermelon(250,250)
  drawGrapes(400,250);
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
  line(x + 35, y - 25, x,y - 70);
  line(x - 20, y - 25, x, y - 70);
  fill(50,205,50);
  triangle (x, y - 70, x - 10, y - 90, x - 20, y - 90);
}
