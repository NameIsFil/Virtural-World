import { Plant } from './Plant';
import { checkWithChance } from '../../utilities/checkWithChance';
import { NUMBER_OF_TURNS_TO_BECOME_MATEABLE } from '../../utilities/constants';

class Grass extends Plant {
  divClass = 'grass-tile';
  initiative = 0;
  strength = 0;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Grass };
