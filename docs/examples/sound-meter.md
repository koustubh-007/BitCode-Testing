
# Sound meter

Measure surrounding sound levels and display them as a five-level LED bar graph.

```blocks
let soundLevel = 0
basic.pause(200)
basic.forever(function () {
    soundLevel = Math.floor(input.soundLevel() * 5 / 255)
    if (soundLevel > 5) {
        soundLevel = 5
    }
    if (soundLevel < 0) {
        soundLevel = 0
    }
    led.plotBarGraph(soundLevel, 5)
})
```
