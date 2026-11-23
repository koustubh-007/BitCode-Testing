
# Magic 8-ball

Shake the micro:bit to receive a random answer: Yes, No, or Maybe.

```blocks
input.onGesture(Gesture.Shake, function () {
    let number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
```
