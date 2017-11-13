import React, { Component } from 'react';
import Button from 'antd/lib/button';

class GameBoardButton extends Component {
    constructor(props) {
        super(props);
        // this.handleButtonClicked.bind(this);
    }

    handleButtonClicked = () => {
        console.log('handleButtonClicked :: ', this.props);
        const buttonLabel = Math.random() > .5 ? 'X' : 'O';
        // const xPos = this.props.key % 3;
        // const yPos = Math.floor(this.props.key / 3);
        // this.props.handleButtonClicked(buttonLabel, xPos, yPos);
    }
    
    render() {
        const { type, label } = this.props;
        return (
            <Button 
                type={type || 'primary'}
                className="game-board-button"
                onClick={this.handleButtonClicked}
            >{label || '\0'}</Button>
        );
    }
}

export default GameBoardButton;