import { Plant } from './Plant';
import { checkWithChance } from '../../utilities/checkWithChance';

class Thistle extends Plant {
  divClass = 'sow-tile';
  initiative = 0;
  strength = 0;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  move() {
    return new Promise((resolve) => {
      this.turnsAfterBorn += 1;
      if (checkWithChance(0.3) && this.turnsAfterBorn > 3) {
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
      } else {
        return resolve();
      }
    });
  }
}

export { Thistle };
