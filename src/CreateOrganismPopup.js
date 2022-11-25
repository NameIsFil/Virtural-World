import { Wolf } from './organisms/animals/Wolf';

class CreateOrganismPopup {
  board;

  constructor(board) {
    this.board = board;
    this.board.visibleGameGrid.addEventListener('click', (event) => {
      const cell = event.target;

      const xIndex = Number(cell.getAttribute('data-x-index'));
      const yIndex = Number(cell.getAttribute('data-y-index'));

      this.board.hiddenMenu.className = 'unhidden';

      this.board.wolfSpawnButton.addEventListener('click', (event) => {
        this.board.spawnOrganism(Wolf, xIndex, yIndex);
        this.board.hiddenMenu.className = 'hidden';
      });
    });
    this.board.closeMenuButton.addEventListener('click', (event) => {
      this.board.hiddenMenu.className = 'hidden';
    });
  }
}

export { CreateOrganismPopup };
