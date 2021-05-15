import React, { Component } from 'react';
import styles from './App.module.css';
import Eagle from './eagle.png';

class App extends Component {
  state = {
    query: "",
    results: []
  }

  generateRandomString = () => {
    var charset = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (var i = 0; i < (Math.round(Math.random() * 10) + 1); i++) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
  }

  SearchHandler(event) {
    let searchedTerm = event.target.value;
    let noOfResultsToBeShown = Math.round(Math.random() * 10) + 1;
    let tempArray = [];
    for (let i = 0; i < noOfResultsToBeShown; i++) {
      tempArray.push(searchedTerm + this.generateRandomString());
    }
    tempArray = tempArray.sort();
    if(searchedTerm.length == 0){
      tempArray = [];
    }
    this.setState({ query: searchedTerm, results: tempArray });
  }

  render() {
    return (
      <div className={styles.App}>
        <img src={Eagle} alt="Logo" />
        <input 
          type="search"
          onChange={(event) => this.SearchHandler(event)} 
          value={this.state.query} 
          placeholder="start typing here..." />
        <div id={styles.SearchResultDiv}>
          {
            this.state.results.map(result => {
              return <p 
                key={this.generateRandomString()} 
                className={styles.SearchHover}>{result}</p>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
