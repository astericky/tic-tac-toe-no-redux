import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './checkTicTacToe';
import ResetButton from './ResetButton';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };
    this.handleResetButtonClicked.bind(this);
    this.handleBoardButtonClicked.bind(this);
  }

  handleResetButtonClicked() {
    this.setState({
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    });
  }

  handleBoardButtonClicked(buttonLabel, xPos, yPos) {
    console.log('App :: handleBoardButtonClicked');
  }

  render() {
    let text = "reset"
    return (
      <div className="App">
        <ResetButton onClick={this.handleResetButtonClicked} text={text} />
        <GameBoard 
          onBoardButtonClicked={this.handleBoardButtonClicked} 
          board={this.state.board} 
        />
      </div>
    );
  }
}

export default App;
