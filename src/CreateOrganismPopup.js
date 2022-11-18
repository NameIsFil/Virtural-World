class CreateOrganismPopup {
  board;

  constructor(board) {
    this.board = board;
    this.board.visibleGameGrid.addEventListener('click', (event) => {
      const cell = event.target;
      console.log(cell);

      const xIndex = Number(cell.getAttribute('data-x-index'));
      const yIndex = Number(cell.getAttribute('data-y-index'));
      console.log(xIndex, yIndex);
    });
  }
}

export { CreateOrganismPopup };
