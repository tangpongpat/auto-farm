#define BLYNK_PRINT Serial

#define DHTPIN D2

#define DHTTYPE DHT11

#include <SPI.h>

#include <ESP8266WiFi.h>

#include <BlynkSimpleEsp8266.h>

#include <SimpleTimer.h>

#include <DHT.h>

int sensorPin = A0;

int sensorValue = 0;

int Relay = D3;

bool auto_on = false;

SimpleTimer timer;

DHT dht(DHTPIN, DHTTYPE);

WidgetLCD lcd(V6);

char auth[] = "XWhJDY7stVpMAMpq8X4nJ4DTdJ0Gp7EF";

char ssid[] = "SEKKEE5_2.4G";

char pass[] = "sekkee534";

BLYNK_CONNECTED() {

  Blynk.syncAll();

  }

BLYNK_WRITE(V4) {

  if (param.asInt() == 1) {

    digitalWrite(Relay,HIGH);

    lcd.clear();

    lcd.print(0,0,"PUMP: ON");

    lcd.print(0,1,"STATS: Manual On");

    delay(500);

    Blynk.virtualWrite(V3,LOW);

  }

  if (param.asInt() == 0) {

    digitalWrite(Relay,LOW);

    lcd.clear();

    lcd.print(0,0,"PUMP: OFF");

    lcd.print(0,1,"STATS: ManualOff");

    delay(500);

  }

}

void sendTemp() {

  float h = dht.readHumidity();

  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {

    Serial.println("Failed to read from DHT sensor!");

    return;

  }

  Blynk.virtualWrite(V1, t);

  Blynk.virtualWrite(V2, h);

}

void sendSoilValue() {

  sensorValue = analogRead(sensorPin);

  sensorValue = map(sensorValue, 0, 1023, 0, 100);

  Blynk.virtualWrite(V5, sensorValue);

}

void setup() {

  pinMode(Relay,OUTPUT);

  pinMode(sensorPin,INPUT);

  pinMode(DHTPIN,INPUT);

  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass, "myao.myvnc.com", 8888);

  dht.begin();

  lcd.clear();

  lcd.print(4,0,"SMART");

  lcd.print(0,1,"Watering System");

  delay(2000);

  lcd.clear();

  lcd.print(0,0,"Please Wait");

  delay(1000);

  lcd.print(0,0,"Please Wait.");

  delay(1000);

  lcd.print(0,0,"Please Wait..");

  delay(1000);

  lcd.print(0,0,"Please Wait...");

  delay(1000);

  lcd.print(0,0,"Please Wait....");

  delay(1000);

  lcd.clear();

  timer.setInterval(1000L, sendTemp);

  timer.setInterval(1000L, sendSoilValue);

}

void loop() {

  Blynk.run();

  timer.run();

  if(auto_on == true){

  if (sensorValue >30 && sensorValue <85) {

      digitalWrite(Relay,HIGH);

      lcd.clear();

      lcd.print(0,0,"PUMP: ON");

      lcd.print(0,1,"STATS: Dry Soil");

      delay(500);

    }

    else if (sensorValue <30) {

      digitalWrite(Relay,LOW);

      lcd.clear();

      lcd.print(0,0,"PUMP: OFF");

      lcd.print(0,1,"STATS: Water");

      delay(500);

    }

    else if (sensorValue >85) {

      digitalWrite(Relay,LOW);

      lcd.clear();

      lcd.print(0,0,"PUMP: OFF");

      lcd.print(0,1,"STATS: Air");

      delay(500);

    }

}

}

BLYNK_WRITE(V3) {

  //sensorValue = analogRead(sensorPin);

  //sensorValue = map(sensorValue, 0, 1023, 0, 100);

  if (param.asInt() == 1) {

    auto_on = true;

    Blynk.virtualWrite(V4,LOW);

  }else{

    auto_on = false;

    digitalWrite(Relay,LOW);

    lcd.clear();

    lcd.print(0,0,"PUMP: OFF");

    lcd.print(0,1,"STATS: AutoOff");

    delay(500);

  }

}
