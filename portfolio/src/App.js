import React from 'react';
import './App.css';
import {Jumbotron} from "reactstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron>This is a Jumbotron</Jumbotron>
    </div>
  );
}

export default App;
