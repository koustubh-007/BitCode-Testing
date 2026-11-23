
# Energy light timer

Use the micro:bit light sensor to measure how long a light stays switched on. The LED display shows whether the light is on or off. Press button B to see the accumulated ON time in minutes.

```blocks
let endtime = 0
let starttime = 0
let timing = false
let totaltime = 0
let minutes = 0
let displaying = false
let LIGHT = 104
let HYSTERESIS = 8
let DARK = LIGHT - HYSTERESIS
let reading = 0

input.onButtonPressed(Button.B, function () {
    minutes = totaltime / 60000
    if (timing) {
        minutes += (input.runningTime() - starttime) / 60000
    }
    displaying = false
    basic.clearScreen()
    basic.showNumber(minutes)
    basic.pause(500)
    displaying = true
})

basic.showString("L")
LIGHT += HYSTERESIS / 2
DARK = LIGHT - HYSTERESIS
reading = input.lightLevel()
basic.pause(1000)
displaying = true

basic.forever(function () {
    reading = input.lightLevel()

    if (reading < DARK) {
        if (timing) {
            endtime = input.runningTime()
            totaltime += endtime - starttime
            timing = false
        }
    } else if (reading >= LIGHT) {
        if (!(timing)) {
            starttime = input.runningTime()
            timing = true
        }
    }

    basic.pause(100)
})

basic.forever(function () {
    if (displaying) {
        if (timing) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
            `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            `)
        }
    }
})
```
