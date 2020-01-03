import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as firebase from 'firebase/app'

const firebaseConfig = {
apiKey: process.env.REACT_APP_API_KEY,
authDomain: "countmein-f67fe.firebaseapp.com",
databaseURL: "https://countmein-f67fe.firebaseio.com",
projectId: "countmein-f67fe",
storageBucket: "countmein-f67fe.appspot.com",
messagingSenderId: "730541057722",
appId: "1:730541057722:web:b2b7966ba0a94dd1c80483"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
)

const App = () => (
    <Provider store={store}>
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Provider>
)

export default App;
