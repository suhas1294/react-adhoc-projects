import React, { Component } from 'react';
import classes from './App.module.css';
import Search from '../../components/Search/v1/Search';
import axios from 'axios';
import SearchResult from '../../components/Search/v1/SearchResult'

class App extends Component {
  state = {
    query: "",
    result: null,
    isMeaningFound: false,
    inputTouched: false
  }

  queriesHandler = (event) => {
    this.setState({query: event.target.value});
  }

  componentDidUpdate(_, prevState){
    let searchWord = this.state.query;
    if(searchWord && (searchWord.length >= 3) && (prevState.query !== this.state.query) ){
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchWord)
        .then(response => {
          this.setState({result: response.data, isMeaningFound: true, inputTouched: true});
        }).catch(error => {
          this.setState({isMeaningFound: false, inputTouched: true});
          console.log("Could not fetch meaning for this word :", {searchWord}, error);
        });
    }
  }

  render(){
    return (
      <div className={classes.App}>
        <h1>what does this mean ?</h1>
        <Search typed={ (event) => this.queriesHandler(event)} curValue={this.state.query} />
        <SearchResult touched={this.state.inputTouched} searchWord={this.state.query} result={this.state.result} meaningFound={this.state.isMeaningFound} />
      </div>
    );
  }
}

export default App;
