import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}