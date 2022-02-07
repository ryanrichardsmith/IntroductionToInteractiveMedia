function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawWatermelon(250,250);
}

function drawGrapes(x,y) {
  circle(x - (1.5*radius), y - radius, radius);
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
