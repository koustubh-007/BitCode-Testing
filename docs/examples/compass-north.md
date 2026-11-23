# Compass North

Create a simple compass to show which way is North.

```blocks
input.calibrateCompass()

basic.forever(function () {
    let bearing = input.compassHeading()

    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        basic.showString(" ")
    }
})
```