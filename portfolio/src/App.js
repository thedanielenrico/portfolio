import React from 'react';
import './App.css';
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Container>

        <NavBar className="bg-transparent"></NavBar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/projects" component={Projects} />

          </Switch>
        </Router>

      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
