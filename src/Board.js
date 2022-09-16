import './styles.css';
import {Tile} from "./Tile";

class Board {
    visibleGameGrid = document.querySelector('#gameGrid');
    rows = 20;
    columns = 20;
    gameGrid = [];

    constructor() {
        this.generateGrid();
    }

    generateGrid() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            const square = new Tile();
            this.gameGrid.push(square);
        }
    }

}

export { Board };