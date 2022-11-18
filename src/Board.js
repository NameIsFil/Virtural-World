import { Tile } from './Tile';
import { Player } from './Player';
import { Wolf } from './Wolf';
import { Sheep } from './Sheep';
import { Fox } from './Fox';
import { Antelope } from './Antelope';
import { Turtle } from './Turtle';
import { wait } from './wait';
import { Guarana } from './Guarana';
import { Grass } from './Grass';
import { Berry } from './Berry';
import { Thistle } from './Thistle';

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
  guarana;
  grass;
  berry;
  thistle;

  constructor() {
    this.generateGrid();
    this.spawnPlayer();
    this.spawnWolf();
    this.spawnSheep();
    this.spawnSheep();
    this.spawnFox();
    this.spawnAntelope();
    this.spawnTurtle();
    this.spawnGrass();
    this.spawnGuarana();
    this.spawnBerry();
    this.spawnSowThistle();
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

  spawnGuarana() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.guarana = new Guarana(xIndex, yIndex, this);
    const tile = this.gameGrid[this.guarana.yIndex][this.guarana.xIndex];
    tile.setOrganism(this.guarana);
    this.organismsArray.push(this.guarana);
  }

  spawnGrass() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.grass = new Grass(xIndex, yIndex, this);
    const tile = this.gameGrid[this.grass.yIndex][this.grass.xIndex];
    tile.setOrganism(this.grass);
    this.organismsArray.push(this.grass);
  }

  spawnBerry() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.berry = new Berry(xIndex, yIndex, this);
    const tile = this.gameGrid[this.berry.yIndex][this.berry.xIndex];
    tile.setOrganism(this.berry);
    this.organismsArray.push(this.berry);
  }

  spawnSowThistle() {
    const { xIndex, yIndex } = this.getRandomFreeCoordinates();
    this.thistle = new Thistle(xIndex, yIndex, this);
    const tile = this.gameGrid[this.thistle.yIndex][this.thistle.xIndex];
    tile.setOrganism(this.thistle);
    this.organismsArray.push(this.thistle);
  }

  findEmptyTileAroundCoordinates({ xIndex, yIndex }) {
    const arrayOfSurroundingTiles = [];
    for (let y = -1; y < 2; y++) {
      for (let x = -1; x < 2; x++) {
        const tileX = xIndex + x;
        const tileY = yIndex + y;
        if (
          tileY < 0 ||
          tileY > this.numberOfRows - 1 ||
          tileX > this.numberOfColumns - 1 ||
          tileX < 0
        ) {
          continue;
        }
        const tile = this.gameGrid[tileY][tileX];
        if (!tile.organism) {
          arrayOfSurroundingTiles.push({ tile, tileX, tileY });
        }
      }
    }
    return arrayOfSurroundingTiles[
      Math.floor(Math.random() * arrayOfSurroundingTiles.length)
    ];
  }

  mate(parrentOrganism) {
    const emptyTile = this.findEmptyTileAroundCoordinates({
      xIndex: parrentOrganism.xIndex,
      yIndex: parrentOrganism.yIndex,
    });
    if (!emptyTile) {
      return;
    }
    const newOrganism = new parrentOrganism.constructor(
      emptyTile.tileX,
      emptyTile.tileY,
      this,
    );
    emptyTile.tile.setOrganism(newOrganism);
    this.organismsArray.push(newOrganism);
    console.log('new organism has been born');
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
