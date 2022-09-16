class Tile {
  divElement;
  setOrganism;
  xIndex;
  yIndex;

  constructor() {
    this.createDiv();
  }

  createDiv() {
    this.divElement = document.createElement('div');
    this.divElement.classList.add('newCell');
  }

  // setOrganism()

  // removeOrganism()
}

export { Tile };
