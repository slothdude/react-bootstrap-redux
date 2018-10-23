import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';

import Computers from './Computers.js';


class Music extends Component{
    constructor(props){
        super(props);
        this.state = {str: ""};
    }
    componentWillMount(){
        axios.get('http://107.170.81.187:8080/public/top#_=_')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render(){
        return(
            <div>
              {this.state.str}
            </div>
        );
    }
}

export default Music;
