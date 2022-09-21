import { Tile } from './Tile';

class Board {
  visibleGameGrid = document.querySelector('#gameGrid');
  numberOfRows = 20;
  numberOfColumns = 20;
  gameGrid = [];

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
    const player = document.createElement('div');
    player.classList.add('player-tile');
    const randomIndex1 = Math.floor(Math.random() * 20);
    const randomIndex2 = Math.floor(Math.random() * 20);
    this.gameGrid[randomIndex1][randomIndex2] = player;
    this.visibleGameGrid.appendChild(player);
  }
}

export { Board };
