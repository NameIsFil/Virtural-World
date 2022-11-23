import { Plant } from './Plant';

class Grass extends Plant {
  divClass = 'grass-tile';
  initiative = 0;
  strength = 0;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  move() {
    return new Promise((resolve) => {
      const emptyTile = this.board.findEmptyTileAroundCoordinates({
        xIndex: this.xIndex,
        yIndex: this.yIndex,
      });
      if (!emptyTile) {
        return resolve();
      }
      const newOrganism = new this.constructor(
        emptyTile.tileX,
        emptyTile.tileY,
        this.board,
      );
      emptyTile.tile.setOrganism(newOrganism);
      this.board.organismsArray.push(newOrganism);
      console.log('new plant has been born');
      return resolve();
    });
  }
}

export { Grass };
