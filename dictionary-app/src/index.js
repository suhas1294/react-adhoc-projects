import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/v2/App';
import reportWebVitals from './reportWebVitals';

// importing necessary libraries for redux implementation
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// importing reducers
import globalReducer from './store/reducers/global';
import dictionaryReducer from './store/reducers/dictionary';

// combining reducers and creating store with root reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  globalReducer: globalReducer,
  dictionaryReducer: dictionaryReducer
})

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ) );

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
