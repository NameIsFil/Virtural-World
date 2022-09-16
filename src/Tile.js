class Tile {
  visibleGameGrid = document.querySelector('#gameGrid');
  setOrganism;
  xIndex;
  yIndex;

  constructor() {
    this.createDiv();
  }

  createDiv() {
    const newSquare = document.createElement('div');
    newSquare.classList.add('newCell');
    this.visibleGameGrid.appendChild(newSquare);
  }

  // setOrganism()

  // removeOrganism()
}

export { Tile };
