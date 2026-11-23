
# Guitar 1 - touch tunes

Turn your micro:bit into a touch-controlled musical instrument! Touch Pin 1 to play Ode to Joy and Pin 2 to play a Blues melody.

```blocks
input.onPinPressed(TouchPin.P2, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P1, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
})
```
