import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {board: new Minesweeper.Board(5, 10)}
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagBoolean) {
        if (flagBoolean) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board })
    }

    render() {
        let {board} = this.state;
        let condition = "MINESWEEPER"

        if (board.lost()) {
            condition = "LOSE"
        }

        if (board.won()) {
            condition = "WIN"
        }

        return (
            <div>
                <header className="minesweeper-headline"> {condition} </header>
                <Board updateGame={this.updateGame} board = {this.state.board}> </Board>
            </div>
        );
    }
}

export default Game;