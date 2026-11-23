
# Distance calculator

Count your steps with the micro:bit and calculate the distance travelled using your step length.

```blocks
let stepcount = 0
let steplength = 0.6

basic.showNumber(0)
music.playTone(262, music.beat(BeatFraction.Whole))

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Heart)
        basic.pause(400)
        stepcount += 1
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(stepcount * steplength)
    }
    if (input.logoIsPressed()) {
        basic.showNumber(stepcount)
    }
})
```
