import { Organism } from '../Organism';
import { checkWithChance } from '../../utilities/checkWithChance';
import { NUMBER_OF_TURNS_TO_BECOME_MATEABLE } from '../../utilities/constants';

class Plant extends Organism {
  isPlant = true;
  turnsAfterBorn = 0;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }

  assignEmptyTile(xIndex, yIndex) {
    return this.board.findEmptyTileAroundCoordinates({
      xIndex: xIndex,
      yIndex: yIndex,
    });
  }

  move() {
    return new Promise((resolve) => {
      this.turnsAfterBorn += 1;
      if (
        checkWithChance(0.1) &&
        this.turnsAfterBorn > NUMBER_OF_TURNS_TO_BECOME_MATEABLE
      ) {
        const emptyTile = this.assignEmptyTile(this.xIndex, this.yIndex);
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
        return resolve();
      } else {
        return resolve();
      }
    });
  }
}

export { Plant };
