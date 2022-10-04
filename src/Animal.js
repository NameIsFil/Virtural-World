import { Organism } from './Organism';

class Animal extends Organism {
  constructor(xIndex, yIndex) {
    super(xIndex, yIndex);
  }
  fight() {}
  mate() {}
}

export { Animal };
