class Player {

    constructor(ctx, cWidth, cHeight) {

        this._width = 80
        this._height = 80
        this._speed = 1
        this._xPos = cWidth;
        this._yPos = cHeight;
        this._ctx = ctx
        this._sheriffPosX = cWidth;
        this._rLimit = this._sheriffPosX - 20
        this._lLimit = cWidth - 450
        this._lifes = 3
        this._myImage = new Image()
        this._myImage.src = "img/sherifshot.png"
        this._fire = new Image()
        this._fire.src = "img/icon_fire.png"

    }

    moveRight() {
        this._sheriffPosX < this._rLimit ? this._sheriffPosX += 60 : null
    }

    moveLeft() {
        this._sheriffPosX > this._lLimit ? this._sheriffPosX -= 60 : null
    }

    draw() {
        this._ctx.drawImage(this._myImage, this._sheriffPosX - 100, this._yPos - 100, this._width, this._height)
    }
}