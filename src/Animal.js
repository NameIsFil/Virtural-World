import { Organism } from './Organism';

class Animal extends Organism {
  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  fight() {}
  move() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return new Promise((resolve) => {
      //up
      if (randomNumber === 1) {
        if (this.yIndex - 1 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex - 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //right-up
      else if (randomNumber === 2) {
        if (this.yIndex - 1 >= 0 && this.xIndex + 1 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex - 1;
          this.xIndex = this.xIndex + 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //right
      else if (randomNumber === 3) {
        if (this.xIndex + 1 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex + 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //right-down
      else if (randomNumber === 4) {
        if (this.xIndex + 1 <= 19 && this.yIndex + 1 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex + 1;
          this.yIndex = this.yIndex + 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //down
      else if (randomNumber === 5) {
        if (this.yIndex + 1 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex + 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //left-down
      else if (randomNumber === 6) {
        if (this.yIndex + 1 <= 19 && this.xIndex - 1 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex + 1;
          this.xIndex = this.xIndex - 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //left
      else if (randomNumber === 7) {
        if (this.xIndex - 1 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex - 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      //left-up
      else if (randomNumber === 8) {
        if (this.xIndex - 1 >= 0 && this.yIndex - 1 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex - 1;
          this.yIndex = this.yIndex - 1;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        }
      }
      resolve();
    });
  }
}

export { Animal };
