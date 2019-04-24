import React, { Component } from "react";
import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <Card>
          <Card.Body>
            <Card.Title>Some title</Card.Title>
            <Card.Text>Some text</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
