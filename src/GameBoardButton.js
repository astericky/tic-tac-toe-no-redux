import React from 'react';
import Button from 'antd/lib/button';

const GameBoardButton = ({ type, label, xPos, yPos, isWinner, handleButtonClicked }) => {
    const handleClick = () => (handleButtonClicked(xPos, yPos)); 
    return (
        <Button
            type={ type || 'primary' }
            className="game-board-button"
            disabled={ isWinner }
            onClick={ handleClick }
        >
            { label || '\0' }
        </Button> 
    );
}

export default GameBoardButton;