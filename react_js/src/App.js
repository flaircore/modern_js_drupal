import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log('Hello from react_js App.js')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="Welcome to Using React text Prop"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Welcome extends Component {
  render() {
    const { text, textnotthere } = this.props;

    return (
      <h1 className="App-title">{ text }</h1>
    )
  }
}

export default App;
