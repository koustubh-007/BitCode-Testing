
# Halloween project

Send spooky faces and sounds to another micro:bit using radio. Press button A for an angry face, button B for a skull, or touch the logo for a ghost. The receiving micro:bit displays the corresponding image and plays a spooky sound.

```blocks
radio.setGroup(31)

radio.onReceivedString(function (receivedString) {
    if (receivedString == "angry") {
        basic.showIcon(IconNames.Angry)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (receivedString == "skull") {
        basic.showIcon(IconNames.Skull)
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (receivedString == "ghost") {
        basic.showIcon(IconNames.Ghost)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("angry")
    basic.showIcon(IconNames.Angry)
    basic.pause(2000)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("skull")
    basic.showIcon(IconNames.Skull)
    basic.pause(2000)
    basic.clearScreen()
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("ghost")
    basic.showIcon(IconNames.Ghost)
    basic.pause(2000)
    basic.clearScreen()
})
```
