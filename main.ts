if (true) {
    basic.showString("si  habla mucho es = no escucha ")
    basic.showLeds(`
        . # # # .
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        `)
} else {
    basic.showString("si no escucha musica se pone brava ")
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        . # . # .
        . # # # .
        `)
}
basic.forever(function () {
	
})
