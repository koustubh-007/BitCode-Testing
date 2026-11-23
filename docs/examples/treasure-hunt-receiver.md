

# Treasure hunt - Receiver

Receives beacon IDs sent over radio and displays them on the LED screen. Requires a second micro:bit running the companion \*\*Treasure hunt - Transmitter\*\* project.

```blocks

radio.setGroup(1)
basic.forever(function () {
   let message = radio.receiveString()
   if (message) {
       basic.showString(message)
       basic.pause(200)
       basic.clearScreen()
   }
})

```



