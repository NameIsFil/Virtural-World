import { Organism } from '../Organism';

class Plant extends Organism {
  isPlant = true;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Plant };
