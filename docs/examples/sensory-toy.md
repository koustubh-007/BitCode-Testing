
# Sensory toy

Explore different movements with the micro:bit to display facial expressions and play matching sounds.

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})

input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})

input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
})

input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
})

input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
})
```
