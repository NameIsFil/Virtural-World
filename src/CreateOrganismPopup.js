import { Wolf } from './organisms/animals/Wolf';

class CreateOrganismPopup {
  board;
  popupElement = document.querySelector('#create-organism-popup');
  closeMenuButton = document.querySelector('#close-button');
  wolfSpawnButton = document.querySelector('#create-wolf-button');
  grassSpawnButton = document.querySelector('#create-grass-button');

  constructor(board) {
    this.board = board;
    this.board.visibleGameGrid.addEventListener('click', (event) => {
      const cell = event.target;

      const xIndex = Number(cell.getAttribute('data-x-index'));
      const yIndex = Number(cell.getAttribute('data-y-index'));

      this.popupElement.classList.remove('hidden');

      this.wolfSpawnButton.addEventListener('click', (event) => {
        this.board.spawnOrganism(Wolf, xIndex, yIndex);
        this.popupElement.classList.add('hidden');
      });
    });
    this.closeMenuButton.addEventListener('click', (event) => {
      this.popupElement.classList.add('hidden');
    });
  }
}

export { CreateOrganismPopup };
