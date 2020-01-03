import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import * as firebase from 'firebase/app'

var firebaseConfig = {
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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
