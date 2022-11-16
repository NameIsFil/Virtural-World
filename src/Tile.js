class Tile {
  divElement;
  organism;

  constructor() {
    this.createDiv();
  }

  createDiv() {
    this.divElement = document.createElement('div');
    this.divElement.classList.add('cell');
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
