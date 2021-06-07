function Kjør () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(1000)
    Neste = 3
}
function Utavkrysset () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    Neste = 0
}
input.onButtonPressed(Button.A, function () {
    NesteLys()
})
function Stopp () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    Neste = 1
}
function Gjørdegklar () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    Neste = 2
}
function NesteLys () {
    if (Neste == 0) {
        Stopp()
    } else if (Neste == 1) {
        Gjørdegklar()
    } else if (Neste == 2) {
        Kjør()
    } else if (Neste == 3) {
        Utavkrysset()
    }
}
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 1)
    led.unplot(4, 1)
    if (Sender == 0) {
        Sender = 1
    } else {
        Sender = 0
    }
})
let Sender = 0
let Neste = 0
Stopp()
basic.forever(function () {
    while (Sender == 1) {
        led.plot(0, 1)
        basic.pause(100)
        led.unplot(0, 1)
        basic.pause(100)
    }
    while (Sender == 0) {
        led.plot(4, 1)
        basic.pause(100)
        led.unplot(4, 1)
        basic.pause(100)
    }
})
