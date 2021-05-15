import React, {Component} from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
//import { Component } from 'h8k-components/dist/types/stencil-public-runtime';
const title = "Slideshow App";

class App extends Component {
    render(){
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="App">
                    <Slides 
                        slides={this.props.slides} 
                        onPrevClick={this.prevButtonHandler}
                        onNextClick={this.nextBtnHandler} />
                </div>
            </div>
        );
    }
}

export default App;
