

\# Light alarm - Sensor / transmitter



Use your micro:bit as a light sensor to protect something precious. It measures the light level and sends a radio message to another micro:bit when the lights turn on or off. Press button A to display the current light level and help calibrate the alarm.



```blocks

radio.setGroup(5)



input.onButtonPressed(Button.A, function () {

&#x20;   basic.showNumber(input.lightLevel())

})



basic.forever(function () {

&#x20;   if (input.lightLevel() > 50) {

&#x20;       radio.sendString("lights on")

&#x20;   } else {

&#x20;       radio.sendString("lights off")

&#x20;   }

&#x20;   basic.pause(10000)

})

```



