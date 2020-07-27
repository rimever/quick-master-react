import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyHello from "./MyHello";
import MyProp from "./MyProp";
import Member from "./MyProp";

ReactDOM.render(
  <React.StrictMode>
    <MyHello name="Yamada" />
    <MyProp prop1={new Member()} prop2="male" prop3="Yamada Taro" prop4={[10,20]}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
