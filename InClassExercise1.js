function setup() {
  createCanvas(400, 400);
    //four cirles
    fill(0,100,0)
    circle (70, 50, 50)
    fill(65,105,225)
    circle(140, 50, 50)
    fill(255, 0, 0)
    circle(210, 50, 50)
    noFill()
    circle(280, 50, 50)

}
function draw() {
  // determining color selection based on
  if (mouseIsPressed === true) {
    if (dist(mouseX, mouseY,70,50) <= 25) {
      fill(0,100,0)
    } else {
      if (dist(mouseX, mouseY, 140, 50) <= 25) {
        fill(65, 105, 225)
      } else {
        if (dist(mouseX, mouseY, 210, 50) <= 25) {
          fill(255, 0, 0)
        } else {
          if (dist(mouseX, mouseY, 280, 50) <= 25) {
            setup()
          }
        }  
        
      }
    }
    
  }
  
  //drawing
  circle(mouseX, mouseY, 5)
}
