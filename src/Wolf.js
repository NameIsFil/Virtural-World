import { Animal } from './Animal';

class Wolf extends Animal {
  divClass = 'wolf-tile';

  constructor(xIndex, yIndex) {
    super(xIndex, yIndex);
  }
}

export { Wolf };
