
# 10 steps counter

Turn your micro:bit into a simple step counter! Shake it to count your steps. When you reach 10, the micro:bit plays a celebratory melody and displays the count before starting again.

```blocks
let steps = 0

basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    steps += 1
})

basic.forever(function () {
    if (steps == 10) {
        music._playDefaultBackground(
            music.builtInPlayableMelody(Melodies.Dadadadum),
            music.PlaybackMode.InBackground
        )
        basic.showNumber(steps)
        steps = 0
    }
})
```
