import { Plant } from './Plant';
import { checkWithChance } from '../../utilities/checkWithChance';

class Berry extends Plant {
  divClass = 'berry-tile';
  initiative = 0;
  strength = 0;
  isPoisonous = true;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  move() {
    return new Promise((resolve) => {
      if (checkWithChance(0.1)) {
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

export { Berry };
