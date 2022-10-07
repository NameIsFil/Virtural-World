import { Tile } from './Tile';
import { Player } from './Player';
import { Wolf } from './Wolf';

class Board {
  visibleGameGrid = document.querySelector('#game-grid');
  numberOfRows = 20;
  numberOfColumns = 20;
  gameGrid = [];
  player;
  wolf;

  constructor() {
    this.generateGrid();
    this.spawnPlayer();
    this.spawnWolf();
    this.refreshBoard();
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
  }

  spawnPlayer() {
    const xIndex = Math.floor(Math.random() * 20);
    const yIndex = Math.floor(Math.random() * 20);
    this.player = new Player(xIndex, yIndex);
    const tile = this.gameGrid[this.player.yIndex][this.player.xIndex];
    tile.setOrganism(this.player);
  }

  spawnWolf() {
    const xIndex = Math.floor(Math.random() * 20);
    const yIndex = Math.floor(Math.random() * 20);
    if (
      !this.gameGrid[yIndex][xIndex].divElement.classList.contains(
        'player-tile',
      )
    ) {
      this.wolf = new Wolf(xIndex, yIndex);
      const tile = this.gameGrid[this.wolf.yIndex][this.wolf.xIndex];
      tile.setOrganism(this.wolf);
    } else {
      this.spawnWolf();
    }
  }

  refreshBoard() {
    for (let y = 0; y < this.numberOfColumns; y++) {
      for (let x = 0; x < this.numberOfRows; x++) {
        const tile = this.gameGrid[y][x];
        tile.refreshDiv();
      }
    }
  }

  moveOrganisms() {
    for (let y = 0; y < this.numberOfColumns; y++) {
      for (let x = 0; x < this.numberOfRows; x++) {
        if (this.gameGrid[y][x].divElement.classList.contains('wolf-tile')) {
          const randomNumber = Math.floor(Math.random() * 8) + 1;
          this.moveWolf(this.wolf, randomNumber);
        }
      }
    }
  }

  movePlayer(keyboardKey) {
    //up
    if (keyboardKey.keyCode === 38) {
      if (this.player.yIndex - 1 >= 0) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.yIndex = this.player.yIndex - 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right-up
    else if (keyboardKey.keyCode === 33) {
      if (this.player.yIndex - 1 >= 0 && this.player.xIndex + 1 <= 19) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.yIndex = this.player.yIndex - 1;
        this.player.xIndex = this.player.xIndex + 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right
    else if (keyboardKey.keyCode === 39) {
      if (this.player.xIndex + 1 <= 19) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.xIndex = this.player.xIndex + 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right-down
    else if (keyboardKey.keyCode === 34) {
      if (this.player.xIndex + 1 <= 19 && this.player.yIndex + 1 <= 19) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.xIndex = this.player.xIndex + 1;
        this.player.yIndex = this.player.yIndex + 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //down
    else if (keyboardKey.keyCode === 40) {
      if (this.player.yIndex + 1 <= 19) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.yIndex = this.player.yIndex + 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left-down
    else if (keyboardKey.keyCode === 35) {
      if (this.player.yIndex + 1 <= 19 && this.player.xIndex - 1 >= 0) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.yIndex = this.player.yIndex + 1;
        this.player.xIndex = this.player.xIndex - 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left
    else if (keyboardKey.keyCode === 37) {
      if (this.player.xIndex - 1 >= 0) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.xIndex = this.player.xIndex - 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left-up
    else if (keyboardKey.keyCode === 36) {
      if (this.player.xIndex - 1 >= 0 && this.player.yIndex - 1 >= 0) {
        const oldTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        this.player.xIndex = this.player.xIndex - 1;
        this.player.yIndex = this.player.yIndex - 1;
        const newTile = this.gameGrid[this.player.yIndex][this.player.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    this.refreshBoard();
    this.moveOrganisms();
  }

  moveWolf(organismTile, randomNumber) {
    //up
    if (randomNumber === 1) {
      if (organismTile.yIndex - 1 >= 0) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.yIndex = organismTile.yIndex - 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right-up
    else if (randomNumber === 2) {
      if (organismTile.yIndex - 1 >= 0 && organismTile.xIndex + 1 <= 19) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.yIndex = organismTile.yIndex - 1;
        organismTile.xIndex = organismTile.xIndex + 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right
    else if (randomNumber === 3) {
      if (organismTile.xIndex + 1 <= 19) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.xIndex = organismTile.xIndex + 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //right-down
    else if (randomNumber === 4) {
      if (organismTile.xIndex + 1 <= 19 && organismTile.yIndex + 1 <= 19) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.xIndex = organismTile.xIndex + 1;
        organismTile.yIndex = organismTile.yIndex + 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //down
    else if (randomNumber === 5) {
      if (organismTile.yIndex + 1 <= 19) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.yIndex = organismTile.yIndex + 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left-down
    else if (randomNumber === 6) {
      if (organismTile.yIndex + 1 <= 19 && organismTile.xIndex - 1 >= 0) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.yIndex = organismTile.yIndex + 1;
        organismTile.xIndex = organismTile.xIndex - 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left
    else if (randomNumber === 7) {
      if (organismTile.xIndex - 1 >= 0) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.xIndex = organismTile.xIndex - 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
    //left-up
    else if (randomNumber === 8) {
      if (organismTile.xIndex - 1 >= 0 && organismTile.yIndex - 1 >= 0) {
        const oldTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        organismTile.xIndex = organismTile.xIndex - 1;
        organismTile.yIndex = organismTile.yIndex - 1;
        const newTile = this.gameGrid[organismTile.yIndex][organismTile.xIndex];
        newTile.setOrganism(oldTile.organism);
        oldTile.setOrganism(null);
      }
    }
  }
}

export { Board };
