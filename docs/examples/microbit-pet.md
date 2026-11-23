
# micro:bit pet

Look after your virtual micro:bit pet! Touch the logo to make it happy or shake the micro:bit to make it giggle. If you leave it alone, it gradually becomes sad, sleepy and eventually disappears.

```blocks
let timer = 0

basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
`)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)

basic.forever(function () {
    if (input.logoIsPressed()) {
        timer = 0
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else if (input.isGesture(Gesture.Shake)) {
        timer = 0
        basic.showIcon(IconNames.Surprised)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else {
        basic.pause(500)
        timer += 0.5
    }

    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    } else if (timer == 40) {
        basic.showIcon(IconNames.Skull)
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        control.reset()
    }
})
```
