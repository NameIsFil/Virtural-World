import { Organism } from '../Organism';

class Plant extends Organism {
  isPlant = true;
  turnsAfterBorn = 0;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Plant };
