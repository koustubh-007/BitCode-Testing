
# Candle

Make a digital candle that flickers on the LED display. Blow or clap near the micro:bit microphone to turn the flame on or off.

```blocks
let lit = true
let flicker = 0

basic.forever(function () {
    if (input.soundLevel() > 150) {
        lit = !lit
        basic.pause(500)
    }

    if (lit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
        `)
        basic.pause(150)

        flicker = randint(1, 3)
        if (flicker != 2) {
            led.unplot(2, 0)
            led.plotBrightness(flicker, 0, 255)
        }

        basic.pause(150)
    } else {
        basic.clearScreen()
    }
})
```
