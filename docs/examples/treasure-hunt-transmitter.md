
# Treasure hunt - Transmitter

Transmits a beacon ID over radio. Requires a second micro:bit running the companion **Treasure hunt - Receiver** project.

```blocks
let id = "1"

radio.setGroup(1)
radio.setTransmitPower(1)

basic.showString(id)
basic.pause(2000)
basic.clearScreen()

basic.forever(function () {
    radio.sendString(id)
    basic.pause(200)
})
```
