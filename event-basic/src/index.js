import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyEvent from "./MyEvent";
import MyPool from "./MyPool";
import MyState from "./MyState";
import MyParent from "./MyParent";

ReactDOM.render(
  <React.StrictMode>
    <MyEvent greet="Hello" />
    <MyPool/>
    <MyState/>
    <MyParent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
