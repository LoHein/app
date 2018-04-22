import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import AddStudio from '../studio/AddStudio';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/studios" component={AddStudio}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}