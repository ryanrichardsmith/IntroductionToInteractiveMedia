function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawWatermelon(250,250);
}

function drawWatermelon(x,y) {
  fill(50,205,50);
  arc(x,y,150,150,radians(315),radians(135));
  fill(220,20,60);
  arc(x,y,120,120,radians(315),radians(135));
  for (let seeds = 0; seeds < 11; seeds = seeds + 1) {
    seedX = random();
    seedY = random();
    if (dist(x,y,seedX,seedY) > 120) {
      seeds = seeds -1;
    } else {
      point(seedX, seedY);
    }
  }
}
