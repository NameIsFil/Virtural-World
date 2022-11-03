class Organism {
  divClass;
  initiative;
  strength;
  xIndex;
  yIndex;
  id;

  constructor(xIndex, yIndex, board) {
    this.xIndex = xIndex;
    this.yIndex = yIndex;
    this.board = board;
  }
}

export { Organism };
