import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from './pages/App.js';
import Music from './pages/Music.js';
import Computers from './pages/Computers.js';

//React-router routes for having pages at different endpoints
const Routes = props => {
  return(
    <div>
      <Route exact path = '/' component={App}/>
      <Route path='/music' component={Music}/>
      <Route path='/computers' component={Computers}/>
    </div>
  );
}

export default Routes;
