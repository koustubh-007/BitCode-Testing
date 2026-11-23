
# Sunlight sensor

Use the micro:bit light sensor to detect bright conditions and display a sun pattern.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
        `)
    } else {
        basic.clearScreen()
    }
})
```
