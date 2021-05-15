import React, { Component, Suspense } from 'react';
import styles from './App.module.css';
import Welcome from '../common/Welcome'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import axios from './../../axios-dictionary';

// loading all lazy components
const ChooseFeature = React.lazy( () => import('./../common/ChooseFeature') );
const Dictionary = React.lazy( () => import('./../../containers/v2/DictionaryPage') );

class App extends Component {
  render(){
    return (
    <BrowserRouter>
        <div className={styles.App}>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/dictionary" exact render={ () => <Suspense fallback={<div>Loading...</div>}> <Dictionary /> </Suspense> } />
                <Route path="/choose-feature" exact render={ () => (<Suspense fallback={<div>Loading...</div>}> <ChooseFeature /> </Suspense>) } />
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
