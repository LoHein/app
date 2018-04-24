import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import AddStudio from '../studio/AddStudio';
import './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <header role="banner" id="header">
          <section className="head-container maxwidth-wrap">
            <h1 className="logo">Ripe Banana</h1>
          </section>
          
        </header>
        <Router>
          <div>
            <main role="main" id="main">
              <section className="main-container maxwidth-wrap">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/studios" component={AddStudio}/>
                  <Redirect to="/"/>
                </Switch>
              </section>
            </main>
            <footer role="contentinfo" id="footer">
              <section className="footer maxwidth-wrap"> 
                <p>Created by: <a href="https://github.com/heicj" target="_blank" rel="author noopener noreferrer">Charlie</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack</a></p>
              </section>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}