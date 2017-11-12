import React from 'react';
import GameBoardButton from './GameBoardButton';

const GameBoard = (props) => {
    let key = 0;
    let buttons = props.board.map(
        row => (
            row.map(
                item => <GameBoardButton key={key++} text={item} onClick={props.handleBoardButtonClicked} />
        )));
    return (
        
        <div className="game-board">
            {buttons}
        </div>
    );
}

export default GameBoard;