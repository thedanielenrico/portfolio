import React from 'react';
import './App.css';
import {Jumbotron} from "reactstrap";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron>This is a Jumbotron</Jumbotron>
    </div>
  );
}

export default App;
