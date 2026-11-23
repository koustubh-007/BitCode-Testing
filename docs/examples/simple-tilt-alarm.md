
# Simple tilt alarm

Shake the micro:bit to trigger an angry face and play an alarm melody.

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.playMelody("G A B B B A G F ", 120)
})
```
