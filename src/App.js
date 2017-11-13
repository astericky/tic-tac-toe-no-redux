import React, { Component } from 'react';

import ResetButton from './ResetButton';
import GameBoard from './GameBoard';
import checkTicTacToe from './checkTicTacToe';

import logo from './logo.svg';
import './App.css';

const BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: BOARD,
      lastPlay: 'O',
      isWinner: false,
    };
  }

  handleResetButtonClicked = () => {
    this.setState({ 
      board: BOARD,
      lastPlay: 'O',
      isWinner: false,
    });
  }

  handleBoardButtonClicked = (xPos, yPos) => {
    let { board, lastPlay } = this.state;
    board[yPos][xPos] = lastPlay === 'O' ? 'X' : 'O';
    this.setState({ 
      board,
      lastPlay: board[yPos][xPos],
      isWinner: checkTicTacToe(board),
    });
  }

  render() {
    const { board, lastPlay, isWinner } = this.state;
    let resetButtonLabel = isWinner ? `${lastPlay} WINS!` : 'reset...';
    return (
      <div className="App">
        <ResetButton 
          onClick={this.handleResetButtonClicked}
          type="primary" 
          text={resetButtonLabel} 
        />
        <GameBoard 
          handleBoardButtonClicked={this.handleBoardButtonClicked} 
          board={board}
        />
      </div>
    );
  }
}

export default App;
