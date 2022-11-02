import { Animal } from './Animal';

class Player extends Animal {
  divClass = 'player-tile';
  initiative = 4;

  movementResolveFunction;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    if (event.keyCode === 38) {
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
    else if (event.keyCode === 33) {
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
    else if (event.keyCode === 39) {
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
    else if (event.keyCode === 34) {
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
    else if (event.keyCode === 40) {
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
    else if (event.keyCode === 35) {
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
    else if (event.keyCode === 37) {
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
    else if (event.keyCode === 36) {
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
