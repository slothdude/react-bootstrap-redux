import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMusic } from '@fortawesome/free-solid-svg-icons'
// import slide1 from "../images/slide1.jpg";
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import { BrowserRouter, Link, Route } from "react-router-dom";
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
