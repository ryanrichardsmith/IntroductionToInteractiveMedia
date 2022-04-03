//declaring the pins used for the pushbutton & the LEDs.
const int BUTTON_PIN = A5;
const int RED_LED = 11;
const int YELLOW_LED = 10;
const int GREEN_LED = 6;
const int BLUE_LED = 3;

//initalizing the different variables for how bright each LED will be
int red_brightness = 0;
int yellow_brightness = 50;
int green_brightness = 150;
int blue_brightness = 200;

//Initializing the fade variable for each LED so they all fade separately to create a pulse effect
int red_fadeAmount = 5;
int yellow_fadeAmount = 5;
int green_fadeAmount = 5;
int blue_fadeAmount = 5;

void setup() {
  //Declaring button's pin as an input and the LEDs as outputs 
  pinMode(BUTTON_PIN, INPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(BLUE_LED, OUTPUT);
}

void loop() {
  // using the digital read to determine whether the button is being pushed:
  int button_status = digitalRead(BUTTON_PIN);
  
  if (button_status == HIGH) {
  
    // set the brightness of each LED:
    analogWrite(RED_LED, red_brightness);
    analogWrite(YELLOW_LED, yellow_brightness);
    analogWrite(GREEN_LED, green_brightness);
    analogWrite(BLUE_LED, blue_brightness);
   
    // change the brightness for next time through the loop:
    red_brightness = red_brightness + red_fadeAmount;
    yellow_brightness = yellow_brightness + yellow_fadeAmount;
    green_brightness = green_brightness + green_fadeAmount;
    blue_brightness = blue_brightness + blue_fadeAmount;
    
    // reverse the direction of the fading at the ends of the fade:
    if (red_brightness == 0 || red_brightness >= 255) {
          red_fadeAmount = -red_fadeAmount;
        } else if (yellow_brightness == 0 || yellow_brightness >= 255) {
          yellow_fadeAmount = -yellow_fadeAmount;
        } else if (green_brightness == 0 || green_brightness >= 255) {
          green_fadeAmount = -green_fadeAmount;
        } else if (blue_brightness == 0 || blue_brightness >= 255) {
          blue_fadeAmount = -blue_fadeAmount;
        }
        
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
  
  //Turning off the LEDs when the button is not being pushed:
  } else if (button_status == LOW) {
    digitalWrite(RED_LED, LOW);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(GREEN_LED, LOW);
    digitalWrite(BLUE_LED, LOW);
  }
}

