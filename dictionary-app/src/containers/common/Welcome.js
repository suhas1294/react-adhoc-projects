import React, {Component} from 'react';
import styles from './Welcome.module.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions/index'

class Welcome extends Component{

    state = {
        name: ""
    }

    initializeName = (event) => {
        this.setState({name: event.target.value});
    }


    render(){
        return(
            <React.Fragment>
                <h1>Hi, Welcome to our App !</h1>
                <h3>Please type in your name to continue exploring the app</h3>
                <input id={styles.AskUsername} placeholder="Please type in your name" onChange={(event) => this.initializeName(event)} value={this.state.name}/>
                <Link 
                    to="/choose-feature"
                    className={styles.GreenBtn}
                    onClick={() => this.props.onClickNext(this.state.name)} >Next</Link>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickNext: (name) => dispatch(actions.initName(name))
  }
}

export default connect(null, mapDispatchToProps)(Welcome);