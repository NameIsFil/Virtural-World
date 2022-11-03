import { Animal } from './Animal';

class Turtle extends Animal {
  divClass = 'turtle-tile';
  initiative = 1;
  strength = 2;

  constructor(xIndex, yIndex, board) {
    super(xIndex, yIndex, board);
  }
}

export { Turtle };
