import { Organism } from './Organism';

class Animal extends Organism {
  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  getNewCoordinates(randomNumber) {
    if (randomNumber === 1) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex - 1,
      };
    }
    if (randomNumber === 2) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex - 1,
      };
    }
    if (randomNumber === 3) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex,
      };
    }
    if (randomNumber === 4) {
      return {
        xIndex: this.xIndex + 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (randomNumber === 5) {
      return {
        xIndex: this.xIndex,
        yIndex: this.yIndex + 1,
      };
    }
    if (randomNumber === 6) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex + 1,
      };
    }
    if (randomNumber === 7) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex,
      };
    }
    if (randomNumber === 8) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex - 1,
      };
    }
  }

  move() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return new Promise((resolve) => {
      const { xIndex, yIndex } = this.getNewCoordinates(randomNumber);
      if (yIndex < 0 || yIndex > 19 || xIndex > 19 || xIndex < 0) {
        return this.move();
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
      if (newTile.organism) {
        if (newTile.organism.strength > oldTile.organism.strength) {
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(oldTile.organism);
        }
      } else {
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
      resolve();
    });
  }
}

export { Animal };
