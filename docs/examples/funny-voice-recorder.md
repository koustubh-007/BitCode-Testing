
# Funny Voice Recorder

Record your voice using the micro:bit microphone and play it back with a funny change in pitch.

```markdown
```package
audio-recording

```blocks
input.onButtonPressed(Button.A, function () {
    record.setSampleRate(10000, record.AudioSampleRateScope.Recording)
    basic.showIcon(IconNames.SmallSquare)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    record.setSampleRate(20000, record.AudioSampleRateScope.Playback)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
    `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
```
