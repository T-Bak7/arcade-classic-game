sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.powerDown.play()
    game.over(false)
})
let projectile: Sprite = null
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
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Up)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER1, 0, -100)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER2, 0, -100)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player1.isPressed(ControllerButton.Down)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER1, 0, 100)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER2, 0, 100)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER1, -100, 0)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER2, -100, 0)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player1.isPressed(ControllerButton.Right)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER1, 100, 0)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PLAYER2, 100, 0)
        music.pewPew.play()
        pause(500)
    }
})
