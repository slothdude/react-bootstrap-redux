import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMusic } from '@fortawesome/free-solid-svg-icons'
// import slide1 from "../images/slide1.jpg";
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch';
import background from '../background-sketch';
import {Link} from "react-router-dom";


class Home extends Component {
    componentWillRender(){
        console.info("this is an info message");
        console.log("this is a log message");
    }
    render() {
        return (
            <div className="App">
                <div className = "background">
                    <P5Wrapper  sketch={background}/>
                </div>
                <div className = "container">
                    <div class="jumbotron bg-info">
                      <h1 class="display-4">Marc Eastman</h1>
                      <p class="lead">Lover of music, mind, and mammals</p>
                      <hr class="my-4"/>
                      <ul class="no-bullets">
                        <li>
                          <a href="https://www.github.com/slothdude">github.com/slothdude</a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/marcus-eastman">linkedin.com/in/marcus-eastman</a>
                        </li>
                        <li>
                          <a href="https://www.chess.com/member/marceastman">chess.com/member/marceastman</a>
                        </li>
                        <li>
                          <a href="https://soundcloud.com/slothdude">soundcloud.com/slothdude</a>
                        </li>
                        <li>
                          <a href="https://open.spotify.com/user/1231917864?si=dbbc84576aac47a9">open.spotify.com/user/1231917864</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/glowsloth">instagram.com/glowsloth</a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/wachowpow/">facebook.com/wachowpow</a>
                        </li>
                      </ul>
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
                                <Link to = "/computers" className="btn btn-primary">Take a peek</Link>
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
