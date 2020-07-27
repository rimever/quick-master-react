import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyArticle from "./MyArticle";
const articles = [
    {
        url:'https://www.atmarkit.co.jp/ait/series/9383/',
        title:'Angular TIPS',
        description:'Popular JavaScript Framework Angular reference by purpose',
        isNew:true
    },
]
ReactDOM.render(
  <React.StrictMode>
    <dl>{articles.map((article) =>
        <MyArticle {...article} />
    )}</dl>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
