import { Organism } from '../Organism';

class Animal extends Organism {
  isAnimal = true;

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
    if (randomNumber === 9) {
      return {
        xIndex: this.xIndex - 1,
        yIndex: this.yIndex - 1,
      };
    }
  }

  isCollisionWithWall(targetY, targetX) {
    return (
      targetY < 0 ||
      targetY > this.board.numberOfRows - 1 ||
      targetX > this.board.numberOfColumns - 1 ||
      targetX < 0
    );
  }

  attemptToMove(targetTile, currentTile, targetX, targetY) {
    if (!targetTile.organism) {
      this.xIndex = targetX;
      this.yIndex = targetY;
      targetTile.setOrganism(currentTile.organism);
      currentTile.setOrganism(null);
      return true;
    }
    return false;
  }

  checkIfPoisonous(targetTile, currentTile) {
    if (targetTile.organism.isPoisonous) {
      this.board.removeOrganism(currentTile.organism);
      currentTile.setOrganism(null);
      return true;
    }
    return false;
  }

  attemptToMate(targetTile, currentTile) {
    if (targetTile.organism.constructor === currentTile.organism.constructor) {
      this.board.mate(currentTile.organism);
      return true;
    }
    return false;
  }

  checkIfStrengthEqual(targetTile, currentTile) {
    return targetTile.organism.strength === currentTile.organism.strength;
  }

  checkStrengthUnequal(targetTile, currentTile, targetX, targetY) {
    if (targetTile.organism.strength < currentTile.organism.strength) {
      this.xIndex = targetX;
      this.yIndex = targetY;
      this.board.removeOrganism(targetTile.organism);
      targetTile.setOrganism(currentTile.organism);
      currentTile.setOrganism(null);
      return;
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
      if (this.isCollisionWithWall(targetY, targetX)) {
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
      if (this.attemptToMove(targetTile, currentTile, targetX, targetY)) {
        return resolve();
      }
      if (this.checkIfPoisonous(targetTile, currentTile)) {
        return resolve();
      }
      if (this.attemptToMate(targetTile, currentTile)) {
        return resolve();
      }
      if (this.checkIfStrengthEqual(targetTile, currentTile)) {
        return resolve();
      }
      if (targetTile.organism.strength < currentTile.organism.strength) {
        this.xIndex = targetX;
        this.yIndex = targetY;
        this.board.removeOrganism(targetTile.organism);
        targetTile.setOrganism(currentTile.organism);
        currentTile.setOrganism(null);
        return resolve();
      }
      this.board.removeOrganism(currentTile.organism);
      currentTile.setOrganism(null);
      return resolve();
    });
  }
}

export { Animal };
