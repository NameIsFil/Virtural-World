import { Animal } from './Animal';

class Wolf extends Animal {
  divClass = 'wolf-tile';
  initiatve = 5;
  id;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Wolf };
