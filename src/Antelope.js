import { Animal } from './Animal';

class Antelope extends Animal {
  divClass = 'antelope-tile';
  initiative = 4;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  move() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return new Promise((resolve) => {
      //up
      if (randomNumber === 1) {
        if (this.yIndex - 2 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex - 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //right-up
      else if (randomNumber === 2) {
        if (this.yIndex - 2 >= 0 && this.xIndex + 2 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex - 2;
          this.xIndex = this.xIndex + 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //right
      else if (randomNumber === 3) {
        if (this.xIndex + 2 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex + 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //right-down
      else if (randomNumber === 4) {
        if (this.xIndex + 2 <= 19 && this.yIndex + 2 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex + 2;
          this.yIndex = this.yIndex + 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //down
      else if (randomNumber === 5) {
        if (this.yIndex + 2 <= 19) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex + 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //left-down
      else if (randomNumber === 6) {
        if (this.yIndex + 2 <= 19 && this.xIndex - 2 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.yIndex = this.yIndex + 2;
          this.xIndex = this.xIndex - 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //left
      else if (randomNumber === 7) {
        if (this.xIndex - 2 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex - 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      //left-up
      else if (randomNumber === 8) {
        if (this.xIndex - 2 >= 0 && this.yIndex - 2 >= 0) {
          const oldTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          this.xIndex = this.xIndex - 2;
          this.yIndex = this.yIndex - 2;
          const newTile = this.board.getTileWithCoordinates({
            xIndex: this.xIndex,
            yIndex: this.yIndex,
          });
          newTile.setOrganism(oldTile.organism);
          oldTile.setOrganism(null);
        } else {
          this.move();
        }
      }
      resolve();
    });
  }
}

export { Antelope };
