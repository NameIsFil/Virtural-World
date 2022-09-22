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
    const randomYIndex = Math.floor(Math.random() * 20);
    const randomXIndex = Math.floor(Math.random() * 20);
    let player = this.gameGrid[randomYIndex][randomXIndex];
    player.divElement.classList.add('player-tile');
  }
}



export { Board };
