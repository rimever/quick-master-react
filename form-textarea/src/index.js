import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyTextarea from "./MyTextarea";
import MySelect from "./MySelect";
import MyList from "./MyList";
import MyRadio from "./MyRadio";
import MyCheck from "./MyCheck";
import MyCheckMulti from "./MyCheckMulti";

ReactDOM.render(
  <React.StrictMode>
    <MyTextarea />
    <MySelect />
    <MyList/>
    <MyRadio/>
    <MyCheck/>
    <MyCheckMulti/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
