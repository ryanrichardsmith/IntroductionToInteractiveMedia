## Description
For my first program, I aimed to use the push button as my digital input. I wanted to create a pulsating effect along four LEDs, having each subsequent LED fade to brightness while the previous one faded to darkness. The catch was that this effect only happens when the user is pressing the button; otherwise, the lights should be off.

In my second program, I was inspired by the _Do Re Mi_ rhyme from the Sound of Music. Each of these notes has a specific frequency, so I wanted to make the LED blink at a specific frequency depending on the potentiometer's reading. For example, since Do is a lower note than Mi, the light should blink slower when the potentiometer is in the Do range.


## Development Process
For the circuit utilizing the digitial sensor, I essentially followed the rule of giving each LED its own resistor and power source (in this case the PWM-capable pins) and sharing the ground connection. I also modified an Arduino program based on the fade example we did in class, which allowed the LEDs to fade after one another rather than all at once. Although the program was also supposed to do this based on the push button, I did not get this aspect to work. 

For the circuit utilizing the analog sensor, I first found out the frequency of each note (https://www.answers.com/Q/What_is_the_frequency_of_Do-Re-Mi) and then converted them from Hertz to milliseconds (https://www.unitjuggler.com/convert-frequency-from-Hz-to-ms(p).html?val=247) which is what we use for delays in Arduino. Next, since the potentiometer reads from 0 to 1023, I divided the ranges into 8 sections, with 0 to 128 corresponding to Do, 128 to 256 corresponding to Mi, and so on. In order to make the calculations simpler, the last range was only 127 units and it was the same as the first (Do) which I thought was fine since most versions of the scale goes back to Do in the end. I set up the potentiometer and LED similar to the way we did in class, but made a clockwise turn correspond to a higher frequency, as I feel that clockwise usually signifies "more." The usefeluness of this signifier is limited by the fact that La and Ti are relatively low despite being the penultimate notes in the scale, though,

## Pictures
Digital Sensor
![IMG_5692](https://user-images.githubusercontent.com/98512630/161448617-89dbe34e-33ed-48c3-a73b-e9b48235aab7.jpg)


## Videos
Digital Sensor

https://user-images.githubusercontent.com/98512630/161448016-429176b9-4542-4863-a064-1514d360993f.mov

Analog Sensor



## Problems
Digital Sensor
- At first, I could not figure out how to make the LEDs fade in a sequential way, but I found a YouTube video that helped me to realize it was only a matter of breaking up the fade example we learned in class for each LED and giving the LEDs different starting values: https://www.youtube.com/watch?v=-apGA_8SmxY
- Also, as evidenced by the video, I was unable to figure out how to make the lights pulse only when the user pushes the button, and as a result they do the effect indepdendent of the button. 

Analog Sensor
- Initially, I had wanted the light to blink according to the exact (integer) frequencies I had found, but I quickly realized that the light would be blinking faster than my eyes could process at those frequencies. Hence, I multiplied each frequency by 100, rounding to the nearest ten. 

## Schematics
Digital Sensor 
![IMG_0193](https://user-images.githubusercontent.com/98512630/161448064-55a2c42d-f27a-4727-85aa-df389bfa19e3.jpg)

Analog Sensor





