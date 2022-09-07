import {Tile} from "./Tile";

class Board {
    rows = 20;
    columns = 20;
    gameGridElement = document.querySelector('#gameGrid');
    gameGrid = [];

    constructor() {
        this.generateGrid()
    }

    generateGrid() {
        for (let row = 0; row < this.rows; row++) {
            this.gameGrid[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.gameGrid[row][column] = new Tile();
                this.gameGridElement.append();
            }
        }
    }
}

export {Board};