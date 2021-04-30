music.setVolume(255)
let PLAYER1 = sprites.create(img`
    f f f f f f f f f f f f f f . . . . 
    e e e e e e e e e e e e e e . . . . 
    e e e e e e c e e e c c e e . . . . 
    e e c e e e e e e e e e e e . . . . 
    e e e e f f f f f f f e e e . . . . 
    e e e f c f f f f c f f e e . . . . 
    e e e f f f f f f f f f e e . . . . 
    e e e f f f f f 1 f f f f f f f f . 
    e e e f f f f f 1 f f f f c f f f . 
    e e e f f f f f f f f f e e . . . . 
    e e e f f f f f f f f f e c . . . . 
    c e e e f f f f f f f e e e . . . . 
    e e e e e e e e e e e e e e . . . . 
    e e c e e e c e e e e c e e . . . . 
    e e e e e e e e e e e e e e . . . . 
    f f f f f f f f f f f f f f . . . . 
    `, SpriteKind.Player)
let PLAYER2 = sprites.create(img`
    f f f f f f e f f f f f f f . . . . 
    c c c c c c c c c c c c e c . . . . 
    c c c c c c c c e c c c c c . . . . 
    c c e c c c c c c c c c c c . . . . 
    c c c c f f f f f f f c c c . . . . 
    c c c f e f f f f e f f e c . . . . 
    c c c f f f f f f f f f c c . . . . 
    c c c f f f f f 1 f f f f f f f f . 
    c e c f f f f f 1 f f f f e f f f . 
    c c c f f e f f f f f f c e . . . . 
    c c c f f f f f f f e f c c . . . . 
    c c c c f f f f f f f c c c . . . . 
    c e c c e c c c c c c c e c . . . . 
    c c c c c c c c e c c c c c . . . . 
    c c c c c c c c c c c c c c . . . . 
    f f f f f f f f f f f f f f . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
PLAYER1.setPosition(10, 10)
PLAYER2.setPosition(146, 106)
controller.moveSprite(PLAYER1)
controller.player2.moveSprite(PLAYER2)
