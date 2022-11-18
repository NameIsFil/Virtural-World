class Tile {
  divElement;
  organism;
  xIndex;
  yIndex;

  constructor(xIndex, yIndex) {
    this.xIndex = xIndex;
    this.yIndex = yIndex;
    this.createDiv();
  }

  createDiv() {
    this.divElement = document.createElement('div');
    this.divElement.classList.add('cell');
    this.divElement.setAttribute('data-x-index', this.xIndex);
    this.divElement.setAttribute('data-y-index', this.yIndex);
  }

  setOrganism(organism) {
    this.organism = organism;
  }

  refreshDiv() {
    this.divElement.className = 'cell';
    if (this.organism) {
      this.divElement.classList.add(this.organism.divClass);
    }
  }
}

export { Tile };
