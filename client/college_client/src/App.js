import React, { Component } from "react";
//import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: "14rem" }}>
          <Card.Body>
            <Card.Title>Some title</Card.Title>
            <Card.Text>Some text</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem" }}>
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
