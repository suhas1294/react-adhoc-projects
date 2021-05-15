import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../store/actions/index'
import styles from './Welcome.module.css';
import * as features from './features'
import { Redirect } from 'react-router-dom';

class ChooseFeature extends Component{

    forwardToFeature(event){
        const clickedDiv = event.target.closest('.feature-selected');
        switch(clickedDiv.dataset.goto){
            case features.DICTIONARY:
                return (<Redirect to="/dictionary" />);
            case features.FIND_WORDS:
                return (<Redirect to="/" />);
            default:
                return (<Redirect to="/dictionary" />);
        };
    }

    render(){
        let classNames = [styles.FeatureCard, 'feature-selected'];
        return(
            <React.Fragment>

                <h2>Welcome, {this.props.username} ! </h2>
                <p>Choose one of the features below to explore more..</p>
                
                <div onClick={(event) => this.forwardToFeature(event)} className={classNames.join(' ')} data-goto={features.DICTIONARY}>
                    <strong>Online Dictionary</strong>
                    <p>
                        <i>
                            Find out the meaning of unknown words 
                            by chatting with our chatbot interactively.
                        </i>
                    </p>
                </div>

                <div onClick={(event) => this.forwardToFeature(event)} className={classNames.join(' ')} data-goto={features.FIND_WORDS}>
                    <strong>Popular word</strong>
                    <p>
                        <i>
                            Find out most used word and get count 
                            of their occurences in your favourite book.
                        </i>
                    </p>
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return{
      username: state.globalReducer.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddingTask: (payload) => dispatch(actions.initName(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseFeature);