#include <Adafruit_NeoPixel.h>
#include <dht.h>
#ifdef __AVR__
#include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif
#define PIN 6
#define NUMPIXELS 16
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 1000
#define rainPin A0
#define DHT11_PIN 7

dht DHT;

void setup(){
  pinMode(rainPin, INPUT);
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  Serial.begin(9600);
  pixels.begin();
}

void loop() {

  int chk = DHT.read11(DHT11_PIN);
  //Serial.print("Temperature C = ");
  Serial.println(DHT.temperature);

  float F = (DHT.temperature*(9.0/5.0))+32.0;
  //Serial.print("Temperature F = ");
  Serial.println(F);
  if (Serial.available() > 0) {
    int thresh = Serial.read() - '0';
    if (thresh == 0){

      //pixels.clear(); // Set all pixel colors to 'off'

      pixels.setPixelColor(3, pixels.Color(0, 150, 0));

      pixels.show();   // Send the updated pixel colors to the hardware.

    }
    if (thresh == 1){

      //pixels.clear(); // Set all pixel colors to 'off'

      pixels.setPixelColor(3, pixels.Color(255, 0, 0));

      pixels.show();   // Send the updated pixel colors to the hardware.

    }

  }
  

  //Serial.print("Humidity = ");
  Serial.println(DHT.humidity);
  
  int sensorValue = analogRead(rainPin);
  Serial.println(sensorValue);
  if (Serial.available() > 0) {
    int thresh = Serial.read() - '0';
    if (thresh == 0){

      //pixels.clear(); // Set all pixel colors to 'off'

      pixels.setPixelColor(0, pixels.Color(0, 150, 0));

      pixels.show();   // Send the updated pixel colors to the hardware.

    }
    if (thresh == 1){

      //pixels.clear(); // Set all pixel colors to 'off'

      pixels.setPixelColor(0, pixels.Color(255, 0, 0));

      pixels.show();   // Send the updated pixel colors to the hardware.

    }

  }

  // read the input on analog pin 0:

    delay(1000);
  }


