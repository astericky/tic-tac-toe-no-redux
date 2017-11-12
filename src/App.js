import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ResetButton';
import './GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResetButton text="reset" />
        <GameBoard />
      </div>
    );
  }
}

export default App;
