import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <div className = 'AppNavbar'>
          <Navbar />
        </div>

          <Switch>
            <Route exact path='/' component= { Home }/>
          </Switch>

      </div>
    )
  }
}

export default App;
