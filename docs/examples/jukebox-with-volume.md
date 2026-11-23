
# Jukebox with volume

Play built-in melodies using buttons A and B, and adjust the music volume by tilting your micro:bit left or right. Watch the LED bar graph to see the volume level.

```blocks
let volume = 128

input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})

input.onGesture(Gesture.TiltLeft, function () {
    volume += -32
    if (volume < 0) {
        volume = 0
    }
})

input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
})

input.onGesture(Gesture.TiltRight, function () {
    volume += 32
    if (volume > 255) {
        volume = 255
    }
})

basic.forever(function () {
    music.setVolume(volume)
    led.plotBarGraph(volume, 255)
})
```
