import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {updateGame} = this.props; 
        let {board} = this.props;

        return (
            <div className="board-main">
                <ul>
                    {
                        board.grid.map( (row, idx) => {
                            return (    
                                <span className="board-row" key={idx}>
                                    {
                                        row.map( (tile, idx) => 
                                            <Tile key={idx} tile={tile} updateGame={updateGame}/>
                                        )
                                    }
                                </span>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Board;