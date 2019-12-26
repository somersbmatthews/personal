import React from 'react';

import SendEmail from "./containers/SendEmail"
import LandingPage from "./components/LandingPage"

import classes from './App.css';

import NavBar from './components/NavBar'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'


class App extends React.Component {
  
  render() {
    let routes = (
      <Switch>
        <Route path="/SendEmail" component={SendEmail} />
        <Route path="/" exact component={LandingPage} />
        <Redirect path="/" />
      </Switch>
    )
      return (
        <div className="App">
    
          
          {routes}

        </div>
      );
  }
}

export default withRouter(App);
