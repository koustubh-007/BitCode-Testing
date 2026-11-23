
# Dice

Shake the micro:bit to roll a virtual dice and display a random number from 1 to 6.

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
```
