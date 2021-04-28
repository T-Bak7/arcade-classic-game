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
tiles.placeOnTile(PLAYER1, tiles.getTileLocation(2, 8))
tiles.placeOnTile(PLAYER2, tiles.getTileLocation(8, 6))
tiles.setTilemap(tilemap`level1`)
PLAYER1.setStayInScreen(true)
PLAYER2.setStayInScreen(true)
PLAYER1.setBounceOnWall(true)
PLAYER2.setBounceOnWall(true)
forever(function () {
    PLAYER1.setVelocity(50, 50)
    PLAYER2.setVelocity(50, 50)
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
