#include <Servo.h> //including servo library necessary to use the servo motors

Servo greenservo;  // create servo object to control the servo with the green stick
Servo yellowservo; // create servo object to control the servo with the yellow stick

int pos = 0;    // variable to store the position of the servo motors
const int spkrPin = 6; //declaring the pin used to control the piezzo buzzer
const int sensorPin = A0; // declaring the pin used to read light sensed with the photoresistor
const int buttonPin = A5; //declaring the pin used to determine whether the button is pressed

void setup() {
  greenservo.attach(2); //using thr 2 pin to control the servo motor with the green stick
  yellowservo.attach(8); //using the 8 pin to control the servo motor with the yellow stick
  pinMode(sensorPin, INPUT); //establishing that the photoresistor will be used as an input
  pinMode(buttonPin, INPUT); //establishing that the push button will be used as an input
  pinMode(spkrPin, OUTPUT); //establishing that the piezzo buzzer will be used as an output
  
}

void loop() {

  int buttonState = digitalRead(buttonPin); //reading the input from the push button
  int sensorValue = analogRead(sensorPin); //reading the input from the photoresistor

  if (sensorValue > 550){ //550 was chosen because the light in the IM lab naturally produced a reading of 550 max
      tone(spkrPin, sensorValue, 2240); //playing a tone depending on the amount of light sensed
  } else if(sensorValue < 550){
      noTone(spkrPin); //not playing anything if no light is being directly shin
  }
  
  if (buttonState == HIGH){ //if the button is pushed
    for (pos = 0; pos <= 140; pos += 1) { // goes from 0 degrees to 140 degrees in steps of 1 degree
      greenservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(4);                           // waits 4 ms for the servo to reach the position
    }
    
    for (pos = 140; pos >= 0; pos -= 1) { // goes from 140 degrees to 0 degrees
      greenservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(4);                           // waits 4 ms for the servo to reach the position
    }
  
    for (pos = 0; pos <= 160; pos += 1) { // goes from 0 degrees to 160 degrees in steps of 1 degree
      yellowservo.write(pos);             // tell servo to go to position in variable 'pos'
      delay(4);                           // waits 4 ms for the servo to reach the position
    }
    
    for (pos = 160; pos >= 0; pos -= 1) { // goes from 160 degrees to 0 degrees
      yellowservo.write(pos);             // tell servo to go to position in variable 'pos'
      delay(4);                           // waits 4 ms for the servo to reach the position
    }
 
  } else if (buttonState == LOW){
      greenservo.write(0); 
      yellowservo.write(0);             
  } 
  
}

