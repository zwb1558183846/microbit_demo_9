let red = 0
basic.forever(function () {
    red = 0
    for (let index = 0; index < 60; index++) {
        // 观察变量的变化
        basic.showString("" + (red))
        // RGB颜色积木块
        cbit_小车类.RGB_Car_Program().showColor(neopixel.rgb(red, 0, 0))
        red += 1
        basic.pause(50)
    }
})
