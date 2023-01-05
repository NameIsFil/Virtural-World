import { Plant } from './Plant';
import { checkWithChance } from '../../utilities/checkWithChance';
import { NUMBER_OF_TURNS_TO_BECOME_MATEABLE } from '../../utilities/constants';

class Guarana extends Plant {
  divClass = 'guarana-tile';
  initiative = 0;
  strength = 0;
  givesBuffs = true;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Guarana };
