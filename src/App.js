import React from 'react';

import SendEmail from "./containers/SendEmail"

import './App.css';

import NavBar from './components/NavBar'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>This app is working.</h1>
        <NavBar />
        <SendEmail />
        <div className="LandingPageText">Blog</div>
        <div className="LandingPageText">Contact</div>
        <div className="LandingPageText">Projects</div>
        <div className="LandingPageText">GitHub</div>
      </div>
    );
  }
}

export default App;
