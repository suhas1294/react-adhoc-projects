import React, {Component} from 'react';
import styles from './App.module.css';
import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';
import SingleChat from './SingleChat';


// TODO:
// 1. when we get new response, need to scroll down automatically
// 2. Mcard bottom shadow disappearing for large data
// 3. routing issues from choose feature page
// 4. after 2-3 words, input field is pushed down

class DictionaryPage extends Component {

    state = {
        query: ""
    }

    queryHandler = (event) => {
        this.setState({query: event.target.value});
    }

    searchBtnHandler = () => {
        this.setState({query: ""});
        this.props.onSearchHit(this.state.query);
    }

    render() {
        console.log('[allResults]');
        console.log(this.props.allResults);
        return (
            <div id={styles.LayoutHolder}>

                <div id={styles.ChatSection}>
                    {
                        this.props.allResults && this.props.allResults.length > 0 ? 
                        this.props.allResults.map(item => {
                            return (<SingleChat query={item.word} meanings={item.meanings} />);
                        })
                        :
                        <p>Loading...</p>
                    }
                </div>

                <div id={styles.UserInput}>
                    <input placeholder="enter your query here..." onChange={(event) => this.queryHandler(event)} value={this.state.query} />
                    <button className="btn btn-inside btn-boarder" onClick={this.searchBtnHandler}>
                        <img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="64px" height="64px" id="plane" alt="Send" />    
                    </button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        allResults: state.dictionaryReducer.allResults,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchHit: (query) => dispatch(actions.getMeaningAsync(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryPage);