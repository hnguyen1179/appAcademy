import React from 'react';
import * as Minesweeper from './minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {explored: false, flagged: false};
        this.click = this.click.bind(this);
        this.rightClick = this.rightClick.bind(this);
    }

    click(e) {
        console.log('click');
        this.setState({explored: true})
        let currentTile = this.props.tile;
        this.props.updateGame(currentTile, false)
    }

    rightClick(e) {
        e.preventDefault();
        let currentTile = this.props.tile;
        if (this.state.explored === true) return;
        console.log('rightClick');
    
        if (this.state.flagged === false) {
            this.setState({flagged: true});
            this.props.updateGame(currentTile, true);
        } else {
            this.setState({flagged: false});
            this.props.updateGame(currentTile, true);
        }
    }

    render() {
        let {tile} = this.props;
        let cssState;
        let state;

        if (this.state.explored === true || this.state.flagged == true) {
            if (tile.bombed && this.state.flagged === false) {
                state = "B";
                cssState = "bombed"
            } else if (this.state.flagged === true) {
                state = "F";
                cssState = "flagged"
            } else {
                state = tile.adjacentBombCount();
                cssState = "revealed"
            }
        }

        return (
            <div onClick={this.click} onContextMenu={this.rightClick} className="board-tile" id={cssState}>
                {state}
            </div>
        );
    }
}

export default Tile;