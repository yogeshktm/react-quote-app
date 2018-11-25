import React, { Component } from 'react';
import './App.css';
import { QuoteContainer } from './containers/QuoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteContainer/>
      </div>
    );
  }
}

export default App;
