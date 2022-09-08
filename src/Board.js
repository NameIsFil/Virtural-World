import {Tile} from "./Tile";

class Board {
    visibleGameGrid = document.querySelector('#gameGrid')
    rows = 20;
    columns = 20;
    gameGrid = [];

    constructor() {
        this.generateGrid();
    }

    generateGrid() {
        for (let row = 0; row < this.rows; row++) {
            this.gameGrid[row] = [];
            for (let column = 0; column < this.columns; column++) {
                const tile = new Tile();
                this.visibleGameGrid.append(tile);
            }
        }
    }
}

export {Board};