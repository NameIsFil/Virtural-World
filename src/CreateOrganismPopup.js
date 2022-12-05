import { Wolf } from './organisms/animals/Wolf';
import { Grass } from './organisms/plants/Grass';
import { Fox } from './organisms/animals/Fox';
import { Sheep } from './organisms/animals/Sheep';
import { Turtle } from './organisms/animals/Turtle';
import { Antelope } from './organisms/animals/Antelope';
import { Guarana } from './organisms/plants/Guarana';
import { Berry } from './organisms/plants/Berry';
import { Thistle } from './organisms/plants/Thistle';

class CreateOrganismPopup {
  board;
  popupElement = document.querySelector('#create-organism-popup');
  closeMenuButton = document.querySelector('#close-button');
  wolfSpawnButton = document.querySelector('#create-wolf-button');
  foxSpawnButton = document.querySelector('#create-fox-button');
  sheepSpawnButton = document.querySelector('#create-sheep-button');
  turtleSpawnButton = document.querySelector('#create-turtle-button');
  antelopeSpawnButton = document.querySelector('#create-antelope-button');
  grassSpawnButton = document.querySelector('#create-grass-button');
  guaranaSpawnButton = document.querySelector('#create-guarana-button');
  berrySpawnButton = document.querySelector('#create-berry-button');
  thistleSpawnButton = document.querySelector('#create-thistle-button');

  constructor(board) {
    this.board = board;
    this.addCreateOrganismListeners();
    this.board.visibleGameGrid.addEventListener('click', (event) => {
      const cell = event.target;

      const xIndex = Number(cell.getAttribute('data-x-index'));
      const yIndex = Number(cell.getAttribute('data-y-index'));

      const spawnButtons = [
        {
          button: this.wolfSpawnButton,
          classToCreate: Wolf,
        },
        {
          button: this.foxSpawnButton,
          classToCreate: Fox,
        },
        {
          button: this.sheepSpawnButton,
          classToCreate: Sheep,
        },
        {
          button: this.turtleSpawnButton,
          classToCreate: Turtle,
        },
        {
          button: this.antelopeSpawnButton,
          classToCreate: Antelope,
        },
        {
          button: this.grassSpawnButton,
          classToCreate: Grass,
        },
        {
          button: this.guaranaSpawnButton,
          classToCreate: Guarana,
        },
        {
          button: this.berrySpawnButton,
          classToCreate: Berry,
        },
        {
          button: this.thistleSpawnButton,
          classToCreate: Thistle,
        },
      ];

      spawnButtons.forEach(({ button, classToCreate }) => {
        button.addEventListener('click', () => {
          this.board.spawnOrganism(classToCreate, xIndex, yIndex);
          this.popupElement.classList.add('hidden');
          console.log('button clicked');
        });
      });

      this.popupElement.classList.remove('hidden');
    });
    this.closeMenuButton.addEventListener('click', (event) => {
      this.popupElement.classList.add('hidden');
    });
  }

  addCreateOrganismListeners() {
    console.log('addCreateOrganismListeners');
  }
}

export { CreateOrganismPopup };
