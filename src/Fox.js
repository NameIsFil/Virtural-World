import { Animal } from './Animal';

class Fox extends Animal {
  divClass = 'fox-tile';
  initiative = 7;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Fox };
