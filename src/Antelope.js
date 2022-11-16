import { Animal } from './Animal';

class Antelope extends Animal {
  divClass = 'antelope-tile';
  initiative = 4;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  getNewCoordinates(randomNumber) {
    if (randomNumber === 1) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex - 2,
      };
    }
    if (randomNumber === 2) {
      return {
        xIndex: this.xIndex + 2,
        yIndex: this.yIndex - 2,
      };
    }
    if (randomNumber === 3) {
      return {
        xIndex: this.xIndex + 2,
        yIndex: this.yIndex,
      };
    }
    if (randomNumber === 4) {
      return {
        xIndex: this.xIndex + 2,
        yIndex: this.yIndex + 2,
      };
    }
    if (randomNumber === 5) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex + 2,
      };
    }
    if (randomNumber === 6) {
      return {
        xIndex: this.xIndex - 2,
        yIndex: this.yIndex + 2,
      };
    }
    if (randomNumber === 7) {
      return {
        xIndex: this.xIndex - 2,
        yIndex: this.yIndex,
      };
    }
    if (randomNumber === 8) {
      return {
        xIndex: this.xIndex - 2,
        yIndex: this.yIndex - 2,
      };
    }
    if (randomNumber === 9) {
      return {
        xIndex: this.xIndex - 2,
        yIndex: this.yIndex - 2,
      };
    }
  }

  move() {
    const randomNumber = () => {
      return Math.floor(Math.random() * 8) + 1;
    };
    return new Promise((resolve) => {
      const { xIndex: targetX, yIndex: targetY } = this.getNewCoordinates(
        randomNumber(),
      );
      if (
        targetY < 0 ||
        targetY > this.board.numberOfRows - 1 ||
        targetX > this.board.numberOfColumns - 1 ||
        targetX < 0
      ) {
        return this.move().then(() => {
          resolve();
        });
      }
      const currentTile = this.board.getTileWithCoordinates({
        xIndex: this.xIndex,
        yIndex: this.yIndex,
      });
      const targetTile = this.board.getTileWithCoordinates({
        xIndex: targetX,
        yIndex: targetY,
      });
      if (!targetTile.organism) {
        this.xIndex = targetX;
        this.yIndex = targetY;
        targetTile.setOrganism(currentTile.organism);
        currentTile.setOrganism(null);
        return resolve();
      }
      if (targetTile.organism.resistance) {
        resolve();
      }
      if (
        targetTile.organism.constructor === currentTile.organism.constructor
      ) {
        this.board.mate(currentTile.organism);
        return resolve();
      }
      if (targetTile.organism.strength === currentTile.organism.strength) {
        return resolve();
      }
      if (targetTile.organism.strength < currentTile.organism.strength) {
        if (Math.random() < 0.5) {
          this.xIndex = targetX;
          this.yIndex = targetY;
          this.board.removeOrganism(targetTile.organism);
          targetTile.setOrganism(currentTile.organism);
          currentTile.setOrganism(null);
          return resolve();
        } else {
          return resolve();
        }
      }
      if (Math.random() < 0.5) {
        this.board.removeOrganism(currentTile.organism);
        currentTile.setOrganism(null);
        return resolve();
      } else {
        return resolve();
      }
    });
  }
}

export { Antelope };
