import { Animal } from './Animal';

class Wolf extends Animal {
  divClass = 'wolf-tile';
  initiative = 5;
  id;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Wolf };
