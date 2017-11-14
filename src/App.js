import React, { Component } from 'react';
import Button from 'antd/lib/button';

import GameBoard from './GameBoard';
import checkTicTacToe from './checkTicTacToe';

import './App.css';


const initialState = () => ({
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  lastPlay: 'O',
  isWinner: false,
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState() };
  }

  handleResetButtonClicked = () => {
    this.setState({ ...initialState() });
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
    const resetButtonLabel = isWinner ? `${lastPlay} WINS!` : 'reset...';

    return (
      <div className="App">
        <Button 
          type="primary"
          onClick={ this.handleResetButtonClicked }
        >
          { resetButtonLabel }
        </Button>
        <GameBoard 
          handleBoardButtonClicked={ this.handleBoardButtonClicked } 
          board={ board }
          hasWinner={ isWinner }
        />
      </div>
    );
  }
}

export default App;
