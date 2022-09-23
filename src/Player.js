import { Animal } from './Animal';

class Player extends Animal {
  spawnPlayer() {
    this.playerElement = this.gameGrid[this.randomYIndex][this.randomXIndex];
    this.playerElement.divElement.classList.add('player-tile');
  }
}

export { Player };
