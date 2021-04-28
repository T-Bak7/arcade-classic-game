let PLAYER1 = sprites.create(img`
    f f f f f f f f f f f f f f f f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
    f f f f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
let PLAYER2 = sprites.create(img`
    f f f f f f f f f f f f f f f f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . 
    f f f f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
PLAYER1.setPosition(10, 10)
PLAYER2.setPosition(150, 110)
