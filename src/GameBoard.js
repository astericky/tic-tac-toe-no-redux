import React from 'react';
import Button from 'antd/lib/button';
import GameBoardButton from './GameBoardButton';
import './GameBoard.css';

const GameBoard = ({board, hasWinner, handleBoardButtonClicked}) => {
    let key = 0;
    let buttons = board.map(
        (row, rowIndex) => (
            row.map(
                (item, itemIndex) => <GameBoardButton 
                    key={key++}
                    xPos={itemIndex}
                    yPos={rowIndex}
                    label={item}
                    type={item ? 'default' : 'primary'}
                    hasWinner={hasWinner}
                    handleButtonClicked={handleBoardButtonClicked} 
                />
        )));
    return (
        <div className="game-board">
            {buttons}
        </div>
    );
}

export default GameBoard;