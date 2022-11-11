import { Animal } from './Animal';

class Sheep extends Animal {
  divClass = 'sheep-tile';
  initiative = 4;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Sheep };
