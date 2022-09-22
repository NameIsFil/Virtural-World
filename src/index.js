import './styles.css';
import { Board } from './Board';

const newBoard = new Board();

document.addEventListener('keyup', (event) => {
  newBoard.movePlayer(event);
});
