import { Animal } from './Animal';
import { keyCodes } from '../../utilities/keyCodes';
import { PlayerMovementKeyboard } from '../../PlayerMovementKeyboard';
import { Guarana } from '../plants/Guarana';
import { Berry } from '../plants/Berry';

class Player extends Animal {
  divClass = 'player-tile';
  initiative = 4;
  strength = 5;

  movementResolveFunction;
  playerMovementKeyboard;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.playerMovementKeyboard = new PlayerMovementKeyboard(this.board, this);
  }

  getNewCoordinates(keyCode) {
    if (keyCode === keyCodes.standStill) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex,
      };
    }
    if (keyCode === keyCodes.bottom) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex - 1,
      };
    }
    if (keyCode === keyCodes.bottomRight) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex - 1,
      };
    }
    if (keyCode === keyCodes.right) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex,
      };
    }
    if (keyCode === keyCodes.topRight) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === keyCodes.top) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === keyCodes.topLeft) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (keyCode === keyCodes.left) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex,
      };
    }
    if (keyCode === keyCodes.bottomLeft) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex - 1,
      };
    }
  }

  onButtonClick(event) {
    if (this.board.playerRemoved) {
      removeEventListener('keyup', this.onButtonClick);
      return;
    }
    const newCoordinates = this.getNewCoordinates(event.keyCode);
    console.log(event.keyCode);
    if (!newCoordinates) {
      return;
    }

    const { xIndex, yIndex } = newCoordinates;
    if (yIndex < 0 || yIndex > 19 || xIndex > 19 || xIndex < 0) {
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

    if (newTile.organism !== this && newTile.organism) {
      if (newTile.organism.isPoisonous) {
        this.board.removeOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      } else if (newTile.organism.givesBuffs) {
        this.board.removeOrganism(newTile.organism);
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
        this.strength += 4;
      } else {
        if (newTile.organism.strength < oldTile.organism.strength) {
          this.board.removeOrganism(newTile.organism);
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.board.removeOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
    } else if (newTile.organism === this) {
      newTile.setOrganism(oldTile.organism);
    } else {
      newTile.setOrganism(oldTile.organism);
      oldTile.setOrganism(null);
    }

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
