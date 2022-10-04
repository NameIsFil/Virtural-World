import { Animal } from './Animal';

class Player extends Animal {
  divClass = 'player-tile';

  constructor(xIndex, yIndex) {
    super(xIndex, yIndex);
  }
}

export { Player };
