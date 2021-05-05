namespace SpriteKind {
    export const projectile2 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    projectile.destroy()
    info.player2.changeLifeBy(-1)
    music.powerDown.play()
})
info.onCountdownEnd(function () {
    pause(2000)
    game.reset()
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    projectile2.destroy()
    info.changeLifeBy(-1)
    music.powerDown.play()
})
let projectile2: Sprite = null
let projectile: Sprite = null
music.setVolume(255)
info.setLife(5)
info.player2.setLife(5)
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
    `, SpriteKind.Player2)
tiles.setTilemap(tilemap`level1`)
PLAYER1.setPosition(10, 10)
PLAYER2.setPosition(146, 106)
controller.moveSprite(PLAYER1)
controller.player2.moveSprite(PLAYER2)
info.startCountdown(30)
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
        PLAYER1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            f e e e e e e f c e c e e e e f 
            f e e e e e e f f e e e e e e f 
            f e c e e f f f f f f e e c e f 
            f e c e f f f f f f f f e e e f 
            f e e e f c f f f f f f e e e f 
            f e e e f f f 1 1 f f f e e e f 
            f e e e f f f f f f f f e e e f 
            f e c e f f f f f f f f e c e f 
            f e e e f f f f f f f f e e e f 
            f e e e f c f f f f f f e e e f 
            f e e e e f f f f f f e e e e f 
            f e e c e e e e e e e e e c e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e c e e e f 
            `)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
        projectile2.setKind(SpriteKind.projectile2)
        PLAYER2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            f c c c c c c f e e c c c c c f 
            f e c c c e c f f c c c e c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f e f c c c f 
            f c c c f e f f f f f f c c c f 
            f c e c f f f 1 1 f f f c e c f 
            f c c c f f f f f f f f c c c f 
            e c c c f f f f f f f f c c c f 
            f c c c f f f f f e f f c c c f 
            f c c c f e f f f f f f e c c f 
            f c c c c f f f f f f c c c c f 
            f c c e c c c c c c c c c c c f 
            f c c c c c c c e c c c e c c f 
            f c c c c c c c c c c c c c c f 
            `)
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
        PLAYER1.setImage(img`
            f e e e c e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e c e e e e e e e e e c e e f 
            f e e e e f f f f f f e e e e f 
            f e e e f f f f f f c f e e e f 
            f e e e f f f f f f f f e e e f 
            f e c e f f f f f f f f e c e f 
            f e e e f f f f f f f f e e e f 
            f e e e f f f 1 1 f f f e e e f 
            f e e e f f f f f f c f e e e f 
            f e e e f f f f f f f f e c e f 
            f e c e e f f f f f f e e c e f 
            f e e e e e e f f e e e e e e f 
            f e e e e c e c f e e e e e e f 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
        projectile2.setKind(SpriteKind.projectile2)
        PLAYER2.setImage(img`
            f c c c c c c c c c c c c c c f 
            f c c e c c c e c c c c c c c f 
            f c c c c c c c c c c c e c c f 
            f c c c c f f f f f f c c c c f 
            f c c e f f f f f f e f c c c f 
            f c c c f f e f f f f f c c c f 
            f c c c f f f f f f f f c c c e 
            f c c c f f f f f f f f c c c f 
            f c e c f f f 1 1 f f f c e c f 
            f c c c f f f f f f e f c c c f 
            f c c c f e f f f f f f c c c f 
            f c c c c f f f f f f c c c c f 
            f c c e c c c f f c e c c c e f 
            f c c c c c e e f c c c c c c f 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
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
        PLAYER1.setImage(img`
            . . . . f f f f f f f f f f f f f f 
            . . . . e e e e e e e e e e e e e e 
            . . . . e e c e e e e c e e e c e e 
            . . . . e e e e e e e e e e e e e e 
            . . . . e e e f f f f f f f e e e c 
            . . . . c e f f f f f f f f f e e e 
            . . . . e e f f f f f f f f f e e e 
            . f f f c f f f f 1 f f f f f e e e 
            . f f f f f f f f 1 f f f f f e e e 
            . . . . e e f f f f f f f f f e e e 
            . . . . e e f f c f f f f c f e e e 
            . . . . e e e f f f f f f f e e e e 
            . . . . e e e e e e e e e e e c e e 
            . . . . e e c c e e e c e e e e e e 
            . . . . e e e e e e e e e e e e e e 
            . . . . f f f f f f f f f f f f f f 
            `)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
        projectile2.setKind(SpriteKind.projectile2)
        PLAYER2.setImage(img`
            . . . . f f f f f f f f f f f f f f 
            . . . . c c c c c c c c c c c c c c 
            . . . . c c c c c e c c c c c c c c 
            . . . . c e c c c c c c c e c c e c 
            . . . . c c c f f f f f f f c c c c 
            . . . . c c f e f f f f f f f c c c 
            . . . . e c f f f f f f e f f c c c 
            . f f f e f f f f 1 f f f f f c e c 
            . f f f f f f f f 1 f f f f f c c c 
            . . . . c c f f f f f f f f f c c c 
            . . . . c e f f e f f f f e f c c c 
            . . . . c c c f f f f f f f c c c c 
            . . . . c c c c c c c c c c c e c c 
            . . . . c c c c c e c c c c c c c c 
            . . . . c e c c c c c c c c c c c c 
            . . . . f f f f f f f e f f f f f f 
            `)
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
        PLAYER1.setImage(img`
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
            `)
        music.pewPew.play()
        pause(500)
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
        projectile2.setKind(SpriteKind.projectile2)
        PLAYER2.setImage(img`
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
            `)
        music.pewPew.play()
        pause(500)
    }
})
forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (info.life() < 1) {
        PLAYER2.say("I WIN!!!")
        pause(4000)
        game.over(true)
    }
})
forever(function () {
    if (info.player2.life() < 1) {
        PLAYER1.say("I WIN!!!")
        pause(4000)
        game.over(true)
    }
})
