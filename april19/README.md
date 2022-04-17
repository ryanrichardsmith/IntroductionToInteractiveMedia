## Development Process & Difficulties
As we were unsure of what some parts in the syntax of Jack's code meant, especially concerning the serial commands, our assignment was largely an adaption of his in-class example. As such, we thought it a safe bet to keep the different code snippets for each assignment in one Arduino file to ensure that we wouldn't mess up the serial communication. Similarly, we appended both the code for the first and second exercise in the sample code we were given for p5 and left the circuit as shown in Jack's schematic.

In the first exercise, we mapped the readings from the potentiometer to the canvas dimensions so that turning to 0 would cause the ellpse to be at the far left and turning to 1023 would cause the ellipse to be at the far right. However, because we did not quite understand at which point in the code (or in what manner) the potentiometer readings were being sent to p5, we were unable to make the ellipse to be moved in real time; only after a key was pressed did the ellipse reflect the new potentiometer reading. For the second exercise, we decided to divide the LED modes into ten states of brightness (by dividing the maximum value of 255 by 10), and have them correspond to the numbers 0-9 on the keyboard. Thus, based on the number a user types while in p5, the light illuminates differently. Finally, we decided to use the potentiometer to control the wind in the third exercise, which was done by making the first half of the potentiometer's readings correspond to ___ward movement and the second half correspond to ___movement. Unfortunately, we found that the ball did not change direction when we turned the potentiometer, and we soon realized this was because the Arduino was doing `Serial.print()` whereas p5 was doiun

## Videos
Exercise 1: [Video of potentiometer being used to move the ellipse in p5](https://www.youtube.com/watch?v=3Owm6DhnQeE)

Exercise 2: [Video of an LED's brightness being controlled by numbers entered in p5](https://www.youtube.com/watch?v=QLVyXv9EGzc)

Exercise 3: [Video of our modification of the gravity wind example](https://www.youtube.com/watch?v=7P4dwzlPwXo)
