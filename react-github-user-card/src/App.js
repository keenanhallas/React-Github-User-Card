import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
