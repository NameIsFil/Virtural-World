import { Animal } from './Animal';

class Sheep extends Animal {
  divClass = 'sheep-tile';
  initiative = 4;
  strength = 3;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
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
      if (targetTile.organism.isPoisonous) {
        this.board.removeOrganism(currentTile.organism);
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

export { Sheep };
