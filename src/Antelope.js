import { Animal } from './Animal';

class Antelope extends Animal {
  divClass = 'antelope-tile';
  initiative = 4;
  strength = 4;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Antelope };
