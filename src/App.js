import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import React, { Component } from 'react';
// import { CatAPI } from './services/CatAPI';
import ContextProvider from './services/ContextProvider';

export const CatsContext = React.createContext({});

class App extends Component{

  render () {
    return (
      <Router>
        <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/home">
              <ContextProvider>
                <Home/>
              </ContextProvider>       
            </Route>
          </Switch>
      </Router>
    );
  } 
}

export default App;
