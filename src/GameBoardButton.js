import React, { Component } from 'react';
import Button from 'antd/lib/button';

// class GameBoardButton extends Component {
//     constructor(props) {
//         super(props);
//     }

//     handleButtonClicked = () => {
//         const { xPos, yPos } = this.props;
//         this.props.handleButtonClicked(xPos, yPos);
//     }
    
//     render() {
//         const { type, label } = this.props;
//         return (
//             <Button 
//                 type={type || 'primary'}
//                 className="game-board-button"
//                 onClick={this.handleButtonClicked}
//             >{label || '\0'}</Button>
//         );
//     }
// }

const GameBoardButton = ({ type, label }) => {
    const handleButtonClicked = () => {
        const { xPos, yPos } = this.props;
        this.props.handleButtonClicked(xPos, yPos); 
    };

    return (
        <Button
            type={type || 'primary'}
            className="game-board-button"
            onClick={handleButtonClicked}
        >
            {label || '\0'}
        </Button> 
    )

}

export default GameBoardButton;