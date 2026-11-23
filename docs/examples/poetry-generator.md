
# Poetry Generator

Shake your micro:bit to generate a simple poem! The program randomly chooses an adjective, noun, verb and adverb, then scrolls each word across the LED display.

```blocks
let adjectives = ["beautiful", "delicate", "bright"]
let nouns = ["bird", "butterfly", "dragonfly"]
let verbs = ["eats", "flies", "flutters"]
let adverbs = ["swiftly", "silently", "skillfully"]

input.onGesture(Gesture.Shake, function () {
    let choice = randint(0, adjectives.length - 1)
    basic.showString(adjectives[choice])

    choice = randint(0, nouns.length - 1)
    basic.showString(nouns[choice])

    choice = randint(0, verbs.length - 1)
    basic.showString(verbs[choice])

    choice = randint(0, adverbs.length - 1)
    basic.showString(adverbs[choice])
})
```
