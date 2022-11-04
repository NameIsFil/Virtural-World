import { Animal } from './Animal';

class Player extends Animal {
  divClass = 'player-tile';
  initiative = 4;
  strength = 5;

  movementResolveFunction;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getNewCoordinates(keyCode) {
    if (keyCode === 38) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex - 1,
      };
    }
    if (keyCode === 33) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex - 1,
      };
    }
    if (keyCode === 39) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex,
      };
    }
    if (keyCode === 34) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === 40) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === 35) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === 37) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex,
      };
    }
    if (keyCode === 36) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex - 1,
      };
    }
  }

  onButtonClick(event) {
    const { xIndex, yIndex } = this.getNewCoordinates(event.keyCode);
    if (yIndex < 0 || xIndex >= 20) {
      return;
    }

    const oldTile = this.board.getTileWithCoordinates({
      xIndex: this.xIndex,
      yIndex: this.yIndex,
    });
    this.xIndex = xIndex;
    this.yIndex = yIndex;

    const newTile = this.board.getTileWithCoordinates({
      xIndex: this.xIndex,
      yIndex: this.yIndex,
    });
    newTile.setOrganism(oldTile.organism);
    oldTile.setOrganism(null);

    removeEventListener('keyup', this.onButtonClick);
    if (this.movementResolveFunction) {
      this.movementResolveFunction();
    }
  }

  move() {
    return new Promise((resolve) => {
      this.movementResolveFunction = resolve;
      document.addEventListener('keyup', this.onButtonClick);
    });
  }
}

export { Player };
