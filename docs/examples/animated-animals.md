
# Animated animals

Animate a duck and a custom animal image on the micro:bit LED display.

```blocks
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # . .
        . # # # #
        . # # # .
    `)
    basic.pause(500)
})
```
