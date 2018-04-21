import React, { PureComponent } from 'react';
import { Browerrouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact patch="/" component={Home}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}