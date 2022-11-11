import { Animal } from './Animal';

class Wolf extends Animal {
  divClass = 'wolf-tile';
  initiative = 5;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Wolf };
