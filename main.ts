radio.onReceivedValue(function (name, value) {
    if (name == control.deviceName()) {
        if (value == 0) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
        } else if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (value == 2) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else if (value == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        }
    }
})
let flag = 0
radio.setGroup(68)
led.enable(true)
let time = input.runningTime()
let name = [control.deviceName(), "1"]
basic.forever(function () {
    if (input.runningTime() - time >= 5000 && flag == 0) {
        name = [control.deviceName(), ":0"]
        radio.sendValue("" + name[0] + name[1], input.temperature())
        flag = 1
    }
    if (input.runningTime() - time >= 10000) {
        name = [control.deviceName(), ":1"]
        radio.sendValue("" + name[0] + name[1], input.lightLevel())
        time = input.runningTime()
        flag = 0
    }
})
