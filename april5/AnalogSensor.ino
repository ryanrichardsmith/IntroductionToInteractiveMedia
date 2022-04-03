//Declaring the pins used for the potentiometer and the LED
const int POT_PIN = A1;
const int LED = 12;

void setup() {
  // Declaring the potentiometer pin as an input and the LED pin as an output:
  pinMode(POT_PIN, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  // getting a reading from the potentiometer:
  int pot_status = analogRead(POT_PIN);

  digitalWrite(LED, HIGH);

  //Do, a deer, a female deer
  if (pot_status >= 0 && pot_status < 129) {
    delay(380);
  //Re, a spot of golden sun
  } else if (pot_status > 128 && pot_status < 257) {
    delay(340);
  //Mi, a name I call myself
  } else if (pot_status > 256 && pot_status < 385) {
    delay(300);
  //Fa, a long long way to run
  } else if (pot_status > 384 && pot_status < 513) {
    delay(280);
  //So, a needle pulling thread
  } else if (pot_status > 512 && pot_status < 641) {
    delay(250);
  //La, the note to follow So
  } else if (pot_status > 640 && pot_status < 769) {
    delay(450);
  //Ti, a drink with jam or bread
  } else if (pot_status > 768 && pot_status < 897) {
    delay(400);
  //And that brings us back to Do
  } else if (pot_status >= 896 && pot_status < 1023) {
    delay(380);
  }

  digitalWrite(LED, LOW);

  //Do, a deer, a female deer
  if (pot_status >= 0 && pot_status < 129) {
    delay(380);
  //Re, a spot of golden sun
  } else if (pot_status > 128 && pot_status < 257) {
    delay(340);
  //Mi, a name I call myself
  } else if (pot_status > 256 && pot_status < 385) {
    delay(300);
  //Fa, a long long way to run
  } else if (pot_status > 384 && pot_status < 513) {
    delay(280);
  //So, a needle pulling thread
  } else if (pot_status > 512 && pot_status < 641) {
    delay(250);
  //La, the note that's after So
  } else if (pot_status > 640 && pot_status < 769) {
    delay(450);
  //Ti, a drink with jam or bread
  } else if (pot_status > 768 && pot_status < 897) {
    delay(400);
  //And that brings us back to Do
  } else if (pot_status >= 896 && pot_status < 1023) {
    delay(380);
  }
}
