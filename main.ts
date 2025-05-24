basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 15) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 100)
        basic.pause(400)
    } else {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 50)
    }
})
