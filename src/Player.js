import { Animal } from './Animal';

class Player extends Animal {
  divClass = 'player-tile';
  initiatve = 4;

  constructor(xIndex, yIndex) {
    super(xIndex, yIndex);
  }

  move() {
    return new Promise(() => {
      document.addEventListener('keyup', (event) => {
        if (keyboardKey.keyCode === 38) {
          if (this.player.yIndex - 1 >= 0) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.yIndex = this.player.yIndex - 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //right-up
        else if (keyboardKey.keyCode === 33) {
          if (this.player.yIndex - 1 >= 0 && this.player.xIndex + 1 <= 19) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.yIndex = this.player.yIndex - 1;
            this.player.xIndex = this.player.xIndex + 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //right
        else if (keyboardKey.keyCode === 39) {
          if (this.player.xIndex + 1 <= 19) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.xIndex = this.player.xIndex + 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //right-down
        else if (keyboardKey.keyCode === 34) {
          if (this.player.xIndex + 1 <= 19 && this.player.yIndex + 1 <= 19) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.xIndex = this.player.xIndex + 1;
            this.player.yIndex = this.player.yIndex + 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //down
        else if (keyboardKey.keyCode === 40) {
          if (this.player.yIndex + 1 <= 19) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.yIndex = this.player.yIndex + 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //left-down
        else if (keyboardKey.keyCode === 35) {
          if (this.player.yIndex + 1 <= 19 && this.player.xIndex - 1 >= 0) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.yIndex = this.player.yIndex + 1;
            this.player.xIndex = this.player.xIndex - 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //left
        else if (keyboardKey.keyCode === 37) {
          if (this.player.xIndex - 1 >= 0) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.xIndex = this.player.xIndex - 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
        //left-up
        else if (keyboardKey.keyCode === 36) {
          if (this.player.xIndex - 1 >= 0 && this.player.yIndex - 1 >= 0) {
            const oldTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            this.player.xIndex = this.player.xIndex - 1;
            this.player.yIndex = this.player.yIndex - 1;
            const newTile =
              this.gameGrid[this.player.yIndex][this.player.xIndex];
            newTile.setOrganism(oldTile.organism);
            oldTile.setOrganism(null);
          }
        }
      });
    });
  }
}

export { Player };
