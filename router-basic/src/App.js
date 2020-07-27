import React, {Component} from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
import MyCheck from "./MyCheck";
import MyTextarea from "./MyTextarea";
import MyList from "./MyList";
export default class App extends Component{
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Top(MyTextArea)</Link></li>
              <li><Link to="/MyCheck">MyCheck</Link></li>
              <li><Link to="/MyList">MyList</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={MyTextarea}/>
              <Route path="/MyCheck" component={MyCheck}/>
              <Route path="/MyList" component={MyList}/>
            </Switch>
          </div>
        </Router>
    )
  }
}
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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

 */

