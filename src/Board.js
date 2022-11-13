import { Tile } from './Tile';
import { Player } from './Player';
import { Wolf } from './Wolf';
import { Sheep } from './Sheep';
import { Fox } from './Fox';
import { Antelope } from './Antelope';
import { Turtle } from './Turtle';
import { wait } from './wait';

class Board {
  visibleGameGrid = document.querySelector('#game-grid');
  numberOfRows = 20;
  numberOfColumns = 20;
  gameGrid = [];
  organismsArray = [];
  player;
  wolf;
  sheep;
  antelope;
  turtle;

  constructor() {
    this.generateGrid();
    this.spawnPlayer();
    this.spawnWolf();
    this.spawnSheep();
    this.spawnSheep();
    this.spawnSheep();
    this.spawnSheep();
    this.spawnFox();
    this.spawnAntelope();
    this.spawnTurtle();
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

  spawnSheep() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.sheep = new Sheep(xIndex, yIndex, this);
    const tile = this.gameGrid[this.sheep.yIndex][this.sheep.xIndex];
    tile.setOrganism(this.sheep);
    this.organismsArray.push(this.sheep);
  }

  spawnFox() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.fox = new Fox(xIndex, yIndex, this);
    const tile = this.gameGrid[this.fox.yIndex][this.fox.xIndex];
    tile.setOrganism(this.fox);
    this.organismsArray.push(this.fox);
  }

  spawnAntelope() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.antelope = new Antelope(xIndex, yIndex, this);
    const tile = this.gameGrid[this.antelope.yIndex][this.antelope.xIndex];
    tile.setOrganism(this.antelope);
    this.organismsArray.push(this.antelope);
  }

  spawnTurtle() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.turtle = new Turtle(xIndex, yIndex, this);
    const tile = this.gameGrid[this.turtle.yIndex][this.turtle.xIndex];
    tile.setOrganism(this.turtle);
    this.organismsArray.push(this.turtle);
  }

  findEmptyTileAroundCoordinates({ xIndex, yIndex }) {
    const arrayOfSurroundingTiles = [];
    for (let y = -1; y < 2; y++) {
      for (let x = -1; x < 2; x++) {
        const tileX = xIndex + x;
        const tileY = yIndex + y;
        const tile = this.gameGrid[tileY][tileX];
        if (!tile.organism) {
          arrayOfSurroundingTiles.push(tile);
        }
      }
    }
  }

  mate(parrentOrganism) {
    const emptyTile = findEmptyTileAroundCoordinates({
      xIndex: parrentOrganism.xIndex,
      yIndex: parrentOrganism.yIndex,
    });
    if (!emptyTile) {
      return;
    }
    const newOrganism = parrentOrganism.constructor(xIndex, yIndex, board);
  }

  removeOrganism(organismToFind) {
    const elementIndex = this.organismsArray.findIndex((organism) => {
      return organism === organismToFind;
    });
    if (elementIndex === -1) {
      return;
    }
    this.organismsArray.splice(elementIndex, 1);
    if (organismToFind instanceof Player) {
      this.playerRemoved = true;
      console.log('player died');
    }
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
    if (this.playerRemoved) {
      await wait(1000);
    }
    this.playTurn();
  }

  refreshBoard() {
    for (let y = 0; y < this.numberOfColumns; y++) {
      for (let x = 0; x < this.numberOfRows; x++) {
        const tile = this.gameGrid[y][x];
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
