
# Tell me a secret

Send secret Yes or No answers to another micro:bit using radio. Requires a second micro:bit running the same project. Press button A to send Yes or button B to send No.

```blocks
radio.setGroup(7)

radio.onReceivedString(function (receivedString) {
    if (receivedString == "yes") {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "no") {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
```
