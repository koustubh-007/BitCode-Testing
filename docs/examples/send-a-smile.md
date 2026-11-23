
# Send a smile

Send a smile to another micro:bit using radio communication. Press button A to send and display a happy face when a message is received.

```blocks
radio.setGroup(2)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})

radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
```
