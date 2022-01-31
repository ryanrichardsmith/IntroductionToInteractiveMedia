function setup() {
  createCanvas(600,400);
}

function draw() {
  //drawing the pride flag backdrop
  fill(255,0,0);
  noStroke();
  rect(0,0,width,height/6);
  fill(255,165,0);
  rect(0,height/6,width,height/6);
  fill(255,255,0);
  rect(0,(height/6)*2,width,height/6);
  fill(50,205,50);
  rect(0,(height/6)*3,width,height/6);
  fill(0,0,255);
  rect(0,(height/6)*4,width,height/6);
  fill(148,0,211);
  rect(0,(height/6)*5,width,height/6);
  fill(0);
  triangle(256,200,0,-300,0,700);
  fill(139,69,19);
  triangle(213,200,-43,-300,-43,700);
  fill(135,206,250);
  triangle(170,200,-86,-300,-86,700);
  fill(255,192,203);
  triangle(127,200,-129,-300,-129,700);
  fill(255);
  triangle(84,200,-172,-300,-172,700);
    
  //drawing my hair
  stroke(0);
  fill(0);
  ellipse(350,107,220,200)
  circle(347,13,25)
  circle(330,15,25)
  circle(313,20,25)
  circle(297,30,25)
  circle(280,40,25)
  circle(265,50,25)
  circle(254,65,25)
  circle(250,78,25)
  circle(246,89,25)
  circle(245,109,25)
  circle(248,130,25)
  circle(258,150,25)
  circle(268,169,25)  
  circle(368,15,25)
  circle(385,18,25)
  circle(403,25,25)
  circle(420,35,25)
  circle(436,52,25)
  circle(446,68,25)
  circle(452,83,25)
  circle(456,101,25)
  circle(456,119,25)
  circle(451,137,25)
  circle(443,153,25)
  circle(433,168,25)
  
  //drawing my head
  fill(198, 134, 66)
  ellipse(350,160,158,200);
  
  //drawing eyes & eyebrows
  fill(255)
  circle(315,131,40)
  circle(383,131,40)
  fill(84,42,14)
  circle(315,131,20)
  circle(383,131,20)
  fill(0)
  circle(315,131,10)
  circle(383,131,10)
  fill(198, 134, 66)
  noStroke()
  arc(315,131, 40, 40, radians(180), 0)
  arc(383,131,40,40, radians(180),0)
  
  //drawing my shirt/torso
  stroke(0)
  fill(210)
  arc(349,460,210,400, radians(180), 0)
  
  //mask
  fill(255)
  rect(301,180,100,50)
  line(301,180,272,163)
  line(301,231,297,235)
  line(401,231,403,233)
  line(401,181,429,162)
  line(298,106,329,106)
  line(367, 106, 398,106)
  
  //mushrooms
  fill(245,222,179)
  ellipse(534, 60, 30, 60)
  fill(220,20,60)
  arc(535,50,70, 70, radians(180), 0)
  fill(255)
  circle(523, 29, 10)
  circle(551,35, 15)
  
  fill(245,222,179)
  ellipse(534, 162, 30, 60)
  fill(220,20,60)
  arc(534,152,70, 70, radians(180), 0)
  fill(255)
  circle(554, 133, 10)
  circle(521,132, 15)
  
  fill(245,222,179)
  ellipse(536, 274, 30, 60)
  fill(220,20,60)
  arc(536,265,70, 70, radians(180), 0)
  fill(255)
  circle(535, 239, 10)
  circle(558,256, 15)
  circle(518,250,15)
  
  fill(245,222,179)
  ellipse(538, 365, 30, 60)
  fill(220,20,60)
  arc(539,355,70, 70, radians(180), 0)
  fill(255)
  circle(538, 328, 10)
  circle(521, 347, 10)
  circle(560,345, 15)
}
