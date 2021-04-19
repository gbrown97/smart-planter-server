import sys
import serial
import json
import time
import RPi.GPIO as GPIO
import SI1145.SI1145 as SI1145

if  __name__ == '__main__':
    GPIO.setmode(GPIO.BCM)
    sensor = SI1145.SI1145()
    Soilthreshold = 1000
    SunThresh = 23
    FTemp = 76.00
    lineNumber = -1
    ser = serial.Serial('/dev/ttyACM0',9600, timeout=1)
    ser.flush()
    flag = True

while True:
    output_string = ""
    if ser.in_waiting > 0:
        for i in range(4):
            line = ser.readline().decode('utf-8').rstrip()
            lineNumber = lineNumber + 1
            if(lineNumber == 0):
                #print('Temp C')
                #print(line)
                output_string += line
            if(lineNumber == 1):
                #print('Temp F')
                if (float(line) < FTemp):
                    ser.write(str(0).encode('utf-8'))
                if (float(line) > FTemp):
                    ser.write(str(1).encode('utf-8'))
                #print(line)
                output_string += "," + line
            if(lineNumber == 2):
                #print('Humidity')
                #print(line)
                output_string += "," + line
            if(lineNumber == 3):
                #print('Moisture')
                if (int(line) > Soilthreshold):
                    ser.write(str(0).encode('utf-8'))
                if (int(line) < Soilthreshold):
                    ser.write(str(1).encode('utf-8'))
                #print(line)
                output_string += "," + line
                lineNumber = -1
 
        vis = sensor.readVisible()
        IR = sensor.readIR()
        UV = sensor.readUV()
        uvIndex = UV / 100.0
        #print ('Vis:             ' + str(vis))
        #print ('IR:              ' + str(IR))
        #print ('UV Index:        ' + str(uvIndex))
        print(output_string)
        sys.stdout.flush()
        flag = False
        time.sleep(1)
        


