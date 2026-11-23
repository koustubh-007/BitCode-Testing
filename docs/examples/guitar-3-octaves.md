
# Guitar 3 - octaves

Experiment with musical octaves using your micro:bit! Touch Pin 1 or Pin 2 to play different note sequences. Press button A to lower the notes by an octave or button B to raise them by an octave.

```blocks
input.onButtonPressed(Button.A, function () {
    F = F / 2
    A = A / 2
    C = C / 2
    E = E / 2
})

input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(A, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(C, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(E, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.B, function () {
    F = F * 2
    A = A * 2
    C = C * 2
    E = E * 2
})

input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(F, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(A, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(C, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})

let E = 0
let C = 0
let A = 0
let F = 0

F = 349
A = 440
C = 523
E = 659
```
