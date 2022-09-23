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
    //up
    if (keyboardKey.keyCode === 38) {
      if(this.playerYIndex - 1 >= 0) {
        this.playerYIndex = this.playerYIndex - 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //right-up
    else if (keyboardKey.keyCode === 33) {
      if(this.playerYIndex - 1 >= 0 && this.playerXIndex + 1 <= 19) {
        this.playerYIndex = this.playerYIndex - 1;
        this.playerXIndex = this.playerXIndex + 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //right
    else if (keyboardKey.keyCode === 39) {
      if(this.playerXIndex + 1 <= 19) {
        this.playerXIndex = this.playerXIndex + 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //right-down
    else if (keyboardKey.keyCode === 34) {
      if(this.playerXIndex + 1 <= 19 && this.playerYIndex + 1 <= 19) {
        this.playerXIndex = this.playerXIndex + 1;
        this.playerYIndex = this.playerYIndex + 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //down
    else if (keyboardKey.keyCode === 40) {
      if(this.playerYIndex + 1 <= 19) {
        this.playerYIndex = this.playerYIndex + 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //left-down
    else if (keyboardKey.keyCode === 35) {
      if(this.playerYIndex + 1 <= 19 && this.playerXIndex - 1 >= 0) {
        this.playerYIndex = this.playerYIndex + 1;
        this.playerXIndex = this.playerXIndex - 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //left
    else if (keyboardKey.keyCode === 37) {
      if(this.playerXIndex - 1 >= 0) {
        this.playerXIndex = this.playerXIndex - 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
    //left-up
    else if (keyboardKey.keyCode === 36) {
      if(this.playerXIndex - 1 >= 0 && this.playerYIndex - 1 >= 0) {
        this.playerXIndex = this.playerXIndex - 1;
        this.playerYIndex = this.playerYIndex - 1;
        this.player.divElement.classList.remove('player-tile');
        this.player = this.gameGrid[this.playerYIndex][this.playerXIndex];
        this.player.divElement.classList.add('player-tile');
      }
    }
  }
}

export { Board };
