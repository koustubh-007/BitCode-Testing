
# Clap lights

Clap your hands to switch all the micro:bit LEDs on and off.

```blocks
let lightsOn = false
basic.forever(function () {
    if (input.soundLevel() > 128) {
        lightsOn = !(lightsOn)
        if (lightsOn) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
            `)
        } else {
            basic.clearScreen()
        }
        basic.pause(100)
    }
})
```
