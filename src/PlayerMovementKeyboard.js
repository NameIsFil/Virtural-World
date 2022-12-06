import { keyCodes } from "./utilities/keyCodes";

class PlayerMovementKeyboard {
    board;
    player;
    moveTopLeft = document.querySelector('#move-top-left');
    moveLeft = document.querySelector('#move-left');
    moveBottomLeft = document.querySelector('#move-bottom-left');
    moveTop = document.querySelector('#move-top');
    moveStay = document.querySelector('#move-stay');
    moveBottom = document.querySelector('#move-bottom');
    moveTopRight = document.querySelector('#move-top-right');
    moveRight = document.querySelector('#move-right');
    moveBottomRight = document.querySelector('#move-bottom-right');

    constructor(board, player) {
        this.board = board;
        this.player = player;
        this.initializeButtonHandlers();
    }

    initializeButtonHandlers() {
        this.moveLeft.addEventListener('click', () => {
            const event = {
                keyCode: keyCodes.left,
            }
            this.player.onButtonClick(event)
        })
    }
}

export { PlayerMovementKeyboard }