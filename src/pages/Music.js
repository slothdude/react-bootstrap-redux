import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';

import Computers from './Computers.js';
import P5Wrapper from 'react-p5-wrapper';
import background from '../background-sketch';

class Music extends Component{
    constructor(props){
        super(props);
        this.state = {str: ""};
    }
    componentWillMount(){
        
    }
    render(){
        return(
            <div>
                <div className = "background">
                    <P5Wrapper  sketch={background}/>
                </div>
              {this.state.str}
            </div>
        );
    }
}

export default Music;
