let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
    let grid = [];

    for(let i=0; i < 8; i++){
      grid.push(new Array(8));
    }
    let blackPiece = new Piece('black');
    let whitePiece = new Piece('white');
    grid[4][3] = blackPiece;
    grid[3][4] = blackPiece;
    grid[3][3] = whitePiece;
    grid[4][4] = whitePiece;
    return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if ( row > 7 || row < 0 || col < 0 || col > 7) {
    // throw new Error("Invalid pos!");
    return undefined;
  } else { 
    
    return this.grid[row][col];
  } 
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if (this.validMoves(color).length > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
 const piece =  this.getPiece(pos);
 if (piece !== undefined){
  return (piece.color === color);
 } else {
   return false;
 }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return (this.getPiece(pos) !== undefined);
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (this.hasMove('black') || this.hasMove('white')) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  
  if (x > 7 || x < 0 || y < 0 || y > 7) {
    return false;
  } else {
    return true;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
  let newPiece = board.getPiece(newPos);
  
  if(!piecesToFlip){
    piecesToFlip = [];
  }
  
  if (board.isValidPos(newPos) && newPiece !== undefined && newPiece.color !== color){
    let nextPiece = board.getPiece([newPos[0] + dir[0], newPos[1] + dir[1]]);
    if (!nextPiece) {
      return null;
    }
    piecesToFlip.push(newPos);
    return _positionsToFlip(board, newPos, color, dir, piecesToFlip);
  } else {
    if (piecesToFlip.length !== 0) { 
      return piecesToFlip; 
    } else {
      return null;
    }
  }
}

  


/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  let totalValidPositions = this.validMoves(color);
  // debugger

  if (!JSON.stringify(totalValidPositions).includes(pos.toString())) {
    throw new Error("Invalid pos!"); 
  }

  // if (!totalValidPositions.includes(pos)) {
  //   throw new Error("Invalid pos!"); 
  // }

  this.grid[pos[0]][pos[1]] = new Piece(color);

  for (let i = 0; i < Board.DIRS.length; i++) {
    let possibleCaptures = _positionsToFlip(this, pos, color, Board.DIRS[i]);
    if (possibleCaptures) {
      possibleCaptures.forEach(pos => {
        this.getPiece(pos).flip();  
      });
    }
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (!this.isOccupied(pos) && this.isValidPos(pos)) {
    for (let i = 0; i < Board.DIRS.length; i++) {
      let possibleCaptures = _positionsToFlip(this, pos, color, Board.DIRS[i]);
      if (possibleCaptures) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let totalValidPositions = [];
  for (let row = 0; row < this.grid.length; row++) {
    for (let col = 0; col < this.grid[0].length; col++) {
      if (this.validMove([row, col], color)) {
        totalValidPositions.push([row, col]);
      }
    }
  }

  return totalValidPositions;
};

module.exports = Board;

