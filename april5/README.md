## Description
For my first program, I aimed to use the push button as my digital input. I wanted to create a pulsating effect along four LEDs, having each subsequent LED fade to brightness while the previous one faded to darkness. The catch was that this effect only happens when the user is pressing the button; otherwise, the lights should be off.


## Development Process
For the circuit utilizing the digitial sensor, I essentially followed the rule of giving each LED its own resistor and power source (in this case the PWM-capable pins) and sharing the ground connection. I also modified an Arduino program based on the fade example we did in class, which allowed the LEDs to fade after one another rather than all at once. Although the program was also supposed to do this based on the push button, I did not get this aspect to work. 

## Pictures
Digital Sensor
![IMG_5692](https://user-images.githubusercontent.com/98512630/161448151-015f2f91-6207-4b74-96df-1efaa767c7ed.jpg)


## Videos
Digital Sensor

https://user-images.githubusercontent.com/98512630/161448016-429176b9-4542-4863-a064-1514d360993f.mov

## Problems
- At first, I could not figure out how to make the LEDs fade in a sequential way, but I found a YouTube video that helped me to realize it was only a matter of breaking up the fade example we learned in class for each LED and giving the LEDs different starting values: https://www.youtube.com/watch?v=-apGA_8SmxY
- Also, ss evidenced by the video, I was unable to figure out how to make the lights pulse only when the user pushes the button, and as a result they do the effect indepdendent of the button. 

## Schematics
Digital Sensor 
![IMG_0193](https://user-images.githubusercontent.com/98512630/161448064-55a2c42d-f27a-4727-85aa-df389bfa19e3.jpg)







