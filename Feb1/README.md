# Screenshot of Sketch
<img src ="portrait.png" width=70% height=70%>

# My Experience 
- I enjoyed experimenting with the layering of shapes to create a cohesive image (for example I layered circles on top of each other for my eyes)
- I appreciated the freedom that comes with the RGB color scheme because it made it easy to come up with a skin tone that matched me (https://www.rapidtables.com/web/color/index.html was a lifesaver)
- Something interesting that I discovered when utilizing semicircular arcs was that you can vertically invert them by reversing the order of the start/stop parameters (i.e. radian(180),0 instead of 0,radian(180))
- I found the process of repeating shapes (like the mushrooms & flag stripes) extremely tedious, and I hope we will cover a way to do this more efficiently in class
- I also could not find a way to create arms, a nose and mouth, and ears without making them look weird, so I opted for a pandemic-appropriate face mask

# My Code
````
function setup() {
  createCanvas(600,400);
}

function draw() {
  //drawing the pride flag backdrop
  let rectheight = height/6
  fill(255,0,0);
  noStroke();
  rect(0,0,width,rectheight)
  fill(255,165,0);
  rect(0,rectheight,width,rectheight);
  fill(255,255,0);
  rect(0,rectheight*2,width,rectheight);
  fill(50,205,50);
  rect(0,rectheight*3,width,rectheight);
  fill(0,0,255);
  rect(0,rectheight*4,width,rectheight);
  fill(148,0,211);
  rect(0,rectheight*5,width,rectheight);
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
  let d = 25; //d is for diameter
  stroke(0);
  fill(0);
  ellipse(350,107,220,200);
  circle(347,13,d);
  circle(330,15,d);
  circle(313,20,d);
  circle(297,30,d);
  circle(280,40,d);
  circle(265,50,d);
  circle(254,65,d);
  circle(250,78,d);
  circle(246,89,d);
  circle(245,109,d);
  circle(248,130,d);
  circle(258,150,d);
  circle(268,169,d) ; 
  circle(368,15,d);
  circle(385,18,d);
  circle(403,25,d);
  circle(420,35,d);
  circle(436,52,d);
  circle(446,68,d);
  circle(452,83,d);
  circle(456,101,d);
  circle(456,119,d);
  circle(451,137,d);
  circle(443,153,d);
  circle(433,168,d);
  
  //drawing my head
  fill(198, 134, 66);
  ellipse(350,160,158,200);
  
  //drawing eyes 
  fill(255);
  circle(315,131,40);
  circle(383,131,40);
  //drawing my irises
  fill(84,42,14);
  circle(315,131,20);
  circle(383,131,20);
  //drawing my pupils
  fill(0);
  circle(315,131,10);
  circle(383,131,10);
  fill(198, 134, 66);
  //drawing my eyelids
  noStroke();
  arc(315,131, 40, 40, radians(180), 0);
  arc(383,131,40,40, radians(180),0);
  
  //drawing my shirt/torso
  stroke(0);
  fill(210);
  arc(349,460,210,400, radians(180), 0);
  
  //drawing my mask
  fill(255);
  rect(301,180,100,50);
  line(301,180,272,163);
  line(301,231,297,235);
  line(401,231,403,233);
  line(401,181,429,162);
  line(298,106,329,106);
  line(367, 106, 398,106);
  
  //drawing the mushrooms
  fill(245,222,179);
  ellipse(534, 60, 30, 60);
  fill(220,20,60);
  arc(535,50,70, 70, radians(180), 0);
  fill(255);
  circle(523, 29, 10);
  circle(551,35, 15);
  
  fill(245,222,179);
  ellipse(534, 162, 30, 60);
  fill(220,20,60);
  arc(534,152,70, 70, radians(180), 0);
  fill(255);
  circle(554, 133, 10);
  circle(521,132, 15);
  
  fill(245,222,179);
  ellipse(536, 274, 30, 60);
  fill(220,20,60);
  arc(536,265,70, 70, radians(180), 0);
  fill(255);
  circle(535, 239, 10);
  circle(558,256, 15);
  circle(518,250,15);
  
  fill(245,222,179);
  ellipse(538, 365, 30, 60);
  fill(220,20,60);
  arc(539,355,70, 70, radians(180), 0);
  fill(255);
  circle(538, 328, 10);
  circle(521, 347, 10);
  circle(560,345, 15);
}
````
