import { Tile } from './Tile';
import { Player } from './Organism';

class Board {
  visibleGameGrid = document.querySelector('#gameGrid');
  numberOfRows = 20;
  numberOfColumns = 20;
  gameGrid = [];
  player;
  playerXIndex;
  playerYIndex;

  constructor() {
    this.generateGrid();
  }

  generateGrid() {
    for (let y = 0; y < this.numberOfColumns; y++) {
      this.gameGrid[y] = this.gameGrid[y] || [];
      for (let x = 0; x < this.numberOfRows; x++) {
        const tile = new Tile();
        this.gameGrid[y][x] = tile;
        this.visibleGameGrid.appendChild(tile.divElement);
      }
    }
    this.spawnPlayer();
  }

  spawnPlayer() {
    this.playerXIndex = Math.floor(Math.random() * 20);
    this.playerYIndex = Math.floor(Math.random() * 20);
    this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
    this.player.divElement.classList.add('player-tile');
  }

  movePlayer(keyboardKey) {
    //left
    if (keyboardKey.keyCode === 37) {
      this.playerXIndex = this.playerXIndex - 1;
      this.player.divElement.classList.remove('player-tile');
      this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
      this.player.divElement.classList.add('player-tile');
    }
  }
}

export { Board };
