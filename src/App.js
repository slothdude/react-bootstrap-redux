import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route } from "react-router-dom";
import Music from './pages/Music.js';
import Computers from './pages/Computers.js';


class App extends Component {
    componentWillRender(){
        console.info("this is an info message");
        console.log("this is a log message");
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path = '/' component={() => <Home/>}/>
                    <Route path='/music' component={()=> <Music/>}/>
                    <Route path='/computers' component={()=> <Computers/>}/>
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
