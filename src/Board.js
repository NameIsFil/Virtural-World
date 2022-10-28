import { Tile } from './Tile';
import { Player } from './Player';
import { Wolf } from './Wolf';

class Board {
  visibleGameGrid = document.querySelector('#game-grid');
  numberOfRows = 20;
  numberOfColumns = 20;
  gameGrid = [];
  organismsArray = [];
  player;
  wolf;

  constructor() {
    this.generateGrid();
    this.spawnPlayer();
    this.spawnWolf();
    this.refreshBoard();
    this.playTurn();
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

  getRandomFreeCoordinates() {
    const xIndex = Math.floor(Math.random() * 20);
    const yIndex = Math.floor(Math.random() * 20);

    if (this.gameGrid[yIndex][xIndex]) {
      return {
        xIndex,
        yIndex,
      };
    }
    return this.getRandomFreeCoordinates();
  }

  spawnPlayer() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.player = new Player(xIndex, yIndex, this);
    const tile = this.gameGrid[this.player.yIndex][this.player.xIndex];
    tile.setOrganism(this.player);
    this.organismsArray.push(this.player);
  }

  spawnWolf() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.wolf = new Wolf(xIndex, yIndex, this);
    const tile = this.gameGrid[this.wolf.yIndex][this.wolf.xIndex];
    tile.setOrganism(this.wolf);
    this.organismsArray.push(this.wolf);
  }

  getTileWithCoordinates({ xIndex, yIndex }) {
    return this.gameGrid[yIndex][xIndex];
  }

  async playTurn() {
    const sortedOrganisms = this.organismsArray.sort(
      (firstOrganism, secondOrganism) => {
        return secondOrganism.initiatve - firstOrganism.initiatve;
      },
    );

    for (let i = 0; i < sortedOrganisms.length; i++) {
      const organism = sortedOrganisms[i];
      await organism.move();
    }
    this.refreshBoard();
  }

  refreshBoard() {
    for (let y = 0; y < this.numberOfColumns; y++) {
      for (let x = 0; x < this.numberOfRows; x++) {
        const tile = this.gameGrid[y][x];
        if (tile.organism) {
          console.log(tile.organism);
        }
        tile.refreshDiv();
      }
    }
  }

  setGameGridTileOrganism(organism, xIndex, yIndex) {
    const tile = this.gameGrid[yIndex][xIndex];
    tile.setOrganism(organism);
  }
}

export { Board };
