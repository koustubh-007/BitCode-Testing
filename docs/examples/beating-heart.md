\# Beating Heart



Create an animated beating heart on the micro:bit LED display.



```blocks
basic.forever(() => {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

