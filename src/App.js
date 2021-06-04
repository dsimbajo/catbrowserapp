import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import React, { Component } from 'react';
import CatsContextProvider from './services/CatsContextProvider';

export const CatsContext = React.createContext({});

class App extends Component{

  render () {
    return (
      <Router>
        <Switch>
            <Route path="/:id" component={Detail}>
              <Detail />
            </Route>
            <Route path="/">
              <CatsContextProvider>
                <Home/>
              </CatsContextProvider>       
            </Route>
          </Switch>
      </Router>
    );
  } 
}

export default App;
