
const int IN1 = 4;
const int IN2 = 5;

const int LIMIT_1 = 2;
const int LIMIT_2 = 3;

bool clockwise = true;

bool previousPressed = false;

unsigned long lastChange = 0;
const unsigned long debounceTime = 30;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);

  pinMode(LIMIT_1, INPUT_PULLUP);
  pinMode(LIMIT_2, INPUT_PULLUP);

  setMotorDirection();
}

void loop() {
  bool pressed =
    (digitalRead(LIMIT_1) == LOW) ||
    (digitalRead(LIMIT_2) == LOW);

  if (pressed != previousPressed) {
    lastChange = millis();
  }

  static bool stablePressed = false;

  if (millis() - lastChange >= debounceTime) {

    if (pressed != stablePressed) {
      stablePressed = pressed;

      // Reverse once when either switch closes
      if (stablePressed) {
        clockwise = !clockwise;
        setMotorDirection();
      }
    }
  }

  previousPressed = pressed;
}

void setMotorDirection() {
  if (clockwise) {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
  } else {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
  }
}
