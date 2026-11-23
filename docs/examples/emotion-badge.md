
# Emotion badge

Use buttons A and B to display happy and sad faces on the micro:bit LED screen.

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
})
```
