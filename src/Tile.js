class Tile {
    setOrganism;
    xIndex;
    yIndex;

    constructor() {
        this.createDiv();
    }

    createDiv() {
        const newTile = document.createElement('div');
        newTile.classList.add('.newCell');
    }

    // setOrganism()

    // removeOrganism()
}

export { Tile };