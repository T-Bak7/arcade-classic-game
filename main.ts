music.setVolume(100)
let PLAYER1 = sprites.create(img`
    f f f f f f f f f f f f f f f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . 
    f f f f f f f f f f f f f f f . . . 
    `, SpriteKind.Player)
let PLAYER2 = sprites.create(img`
    f f f f f f f f f f f f f f f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
    f f f f f f f f f f f f f f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
PLAYER1.setPosition(10, 10)
PLAYER2.setPosition(150, 110)
forever(function () {
    music.playMelody("G F G A - F E D ", 360)
    music.playMelody("E D E G - E D C ", 360)
    music.playMelody("E D E D E G - E ", 360)
    music.playMelody("G G G G - - - - ", 360)
})
forever(function () {
    music.playMelody("G F G A - F E D ", 360)
    music.playMelody("E D E G - E D C ", 360)
    music.playMelody("E D E D E G - E ", 360)
    music.playMelody("C C C C - - - - ", 360)
})
forever(function () {
    music.playMelody("G F G A - F E D ", 360)
    music.playMelody("E D E G - E D C ", 360)
    music.playMelody("E D E D E G - E ", 360)
    music.playMelody("E E E E - - - - ", 360)
})
forever(function () {
    music.playMelody("G F G A - F E D ", 360)
    music.playMelody("E D E G - E D C ", 360)
    music.playMelody("E D E D E G - E ", 360)
    music.playMelody("C5 C5 C5 C5 - - - - ", 360)
})
