
# Graphical dice

Shake the micro:bit to roll a virtual dice and display the result using LED dots.

```blocks
input.onGesture(Gesture.Shake, function () {
    let number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
        `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
        `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
        `)
    } else if (number == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
        `)
    } else if (number == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
        `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
        `)
    }
})
```
