
# Energy Cost Calculator

Use your micro:bit to monitor how long a light stays switched on and estimate its electricity cost. Adjust the light threshold, bulb wattage and electricity price to match your own setup. Press button B to display the accumulated cost.

```blocks
let LIGHT = 110
let DARK = 102
let WATTS = 1000
let COSTPERKWH = 0.18
let timing = false
let startTime = 0
let totalTime = 0
let reading = 0
let showCost = false
let minutes = 0
let cost = 0
let scaledCost = 0
let wholeCost = 0
let fractionCost = 0

function calcCost(m: number): number {
    let kw = WATTS / 1000
    let hours = m / 60
    let kwh = kw * hours
    return kwh * COSTPERKWH
}

function showCostValue(value: number) {
    scaledCost = Math.round(value * 1000)
    wholeCost = Math.idiv(scaledCost, 1000)
    fractionCost = scaledCost % 1000

    basic.showNumber(wholeCost)
    basic.showString(".")

    if (fractionCost < 100) {
        basic.showString("0")
    }
    if (fractionCost < 10) {
        basic.showString("0")
    }
    basic.showNumber(fractionCost)
}

input.onButtonPressed(Button.B, function () {
    showCost = true
})

basic.showString("L")

reading = input.lightLevel()
basic.pause(1000)

basic.forever(function () {
    reading = input.lightLevel()

    if (reading < DARK) {
        if (timing) {
            totalTime += control.millis() - startTime
            timing = false
        }
    } else if (reading >= LIGHT) {
        if (!timing) {
            startTime = control.millis()
            timing = true
        }
    }

    if (showCost) {
        minutes = totalTime / 60000

        if (timing) {
            minutes += (control.millis() - startTime) / 60000
        }

        cost = calcCost(minutes)
        basic.clearScreen()
        showCostValue(cost)
        basic.pause(500)
        showCost = false
    }

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

    basic.pause(1000)
})
```
