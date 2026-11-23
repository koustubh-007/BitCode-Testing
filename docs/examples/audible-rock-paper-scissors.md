
# Audible rock, paper, scissors

Play rock, paper, scissors using your micro:bit! Shake the device to randomly choose rock, paper or scissors. The LED display shows your selection, while a unique sound lets you hear the result.

```blocks
let choice = 0

function playRockSound() {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
}

function playPaperSound() {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
}

function playScissorsSound() {
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
}

basic.showString("RPS")

input.onGesture(Gesture.Shake, function () {
    choice = randint(0, 2)

    if (choice == 0) {
        // Rock
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
        `)
        playRockSound()
    } else if (choice == 1) {
        // Paper
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        `)
        playPaperSound()
    } else {
        // Scissors
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
        `)
        playScissorsSound()
    }

    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
```
