import { keyCodes } from './utilities/keyCodes';

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
      };
      this.player.onButtonClick(event);
    });
    this.moveTopLeft.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.bottomLeft,
      };
      this.player.onButtonClick(event);
    });
    this.moveBottomLeft.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.topLeft,
      };
      this.player.onButtonClick(event);
    });
    this.moveTop.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.bottom,
      };
      this.player.onButtonClick(event);
    });
    this.moveStay.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.standStill,
      };
      this.player.onButtonClick(event);
    });
    this.moveBottom.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.top,
      };
      this.player.onButtonClick(event);
    });
    this.moveTopRight.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.bottomRight,
      };
      this.player.onButtonClick(event);
    });
    this.moveRight.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.right,
      };
      this.player.onButtonClick(event);
    });
    this.moveBottomRight.addEventListener('click', () => {
      const event = {
        keyCode: keyCodes.topRight,
      };
      this.player.onButtonClick(event);
    });
  }
}

export { PlayerMovementKeyboard };
