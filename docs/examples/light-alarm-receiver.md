

\# Light alarm - Alarm / receiver



Build a wireless alarm that reacts when another micro:bit detects a change in light. When the lights turn on, it displays an angry face and plays the Baddy alarm melody. When the lights turn off, the display clears.



```blocks

radio.setGroup(5)



radio.onReceivedString(function (receivedString) {

&#x20;   if (receivedString == "lights off") {

&#x20;       basic.clearScreen()

&#x20;   } else if (receivedString == "lights on") {

&#x20;       basic.showIcon(IconNames.Angry)

&#x20;       music.play(

&#x20;           music.builtInPlayableMelody(Melodies.Baddy),

&#x20;           music.PlaybackMode.UntilDone

&#x20;       )

&#x20;   }

})

```



