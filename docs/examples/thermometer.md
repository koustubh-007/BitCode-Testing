
# Thermometer

Press button A to measure and display the micro:bit's temperature.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
```
