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
let Neste = 0
Stopp()
basic.forever(function () {
	
})
