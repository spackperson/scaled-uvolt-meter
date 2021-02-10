let scaled_val = 0
let count = 0
let accumulator = 0
let rolling_avg = 0
let reading = pins.analogReadPin(AnalogPin.P0)
let minSample = 10
let in1 = 4
let in2 = 22
let out2 = 5
basic.forever(function () {
    let out1 = 0
    reading = Math.abs(pins.analogReadPin(AnalogPin.P0))
    accumulator += reading
    if (count < minSample) {
        count += 1
        accumulator = accumulator / count
    } else {
        accumulator = accumulator / 2
    }
    scaled_val = Math.round(out1 + (accumulator - in1) * (out2 - out1) / (in2 - in1))
    basic.showNumber(scaled_val)
    serial.writeNumbers([reading, accumulator, scaled_val])
})
