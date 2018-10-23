import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMusic } from '@fortawesome/free-solid-svg-icons'
// import slide1 from "../images/slide1.jpg";
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Music from './Music.js';
import Computers from './Computers.js';


class Home extends Component {
    componentWillRender(){
        console.info("this is an info message");
        console.log("this is a log message");
    }
    render() {
        return (
            <div className="App">
                <div className = "container">
                    <div class="jumbotron bg-info">
                      <h1 class="display-4">Marc Eastman</h1>
                      <p class="lead">Lover of music, space, and computers</p>
                      <hr class="my-4"/>
                      <p>Sloth Fam</p>
                    </div>
                </div>
                <div className = 'container'>
                    <div className = "row">
                        <div class="col-sm">
                            <div class="card bg-info">
                              <FontAwesomeIcon icon={faMusic} size="5x" style ={{margin:"auto"}} />
                              <div class="card-body">
                                <h5 class="card-title">Music</h5>
                                <p class="card-text">My personal life</p>
                                <Link to = "/music" className="btn btn-primary">Take a peek</Link>
                              </div>
                            </div>
                        </div>
                        <div class = "col-sm">
                            <P5Wrapper sketch={sketch} style={{zIndex: -1}}/>
                        </div>
                        <div class="col-sm">
                            <div class="card bg-info">
                              <FontAwesomeIcon icon={faLaptopCode} size="5x" style ={{margin:"auto"}} />
                              <div class="card-body">
                                <h5 class="card-title">Computers</h5>
                                <p class="card-text">My professional life</p>
                                <a href="#" class="btn btn-primary">Take a peek</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default Home;
