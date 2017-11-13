import React from 'react';
import GameBoardButton from './GameBoardButton';
import './GameBoard.css';

const GameBoard = (props) => {
    let key = 0;
    let buttons = props.board.map(
        (row, rowIndex) => (
            row.map(
                (item, itemIndex) => <GameBoardButton 
                    key={key++}
                    xPos={itemIndex}
                    yPos={rowIndex}
                    label={item}
                    type={item ? 'default' : 'primary'}
                    handleButtonClicked={props.handleBoardButtonClicked} 
                />
        )));
    return (
        <div className="game-board">
            {buttons}
        </div>
    );
}

export default GameBoard;