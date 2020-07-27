import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = 'Yamada';
const newLine = 'Hello,World! <br/>Bye-bye';
const url = "https://wings.msn.to/";
const style = { color:'Red',backgroundColor:'Yellow'};
const attrs = {
    src: 'http://www.wings.msn.to/image/wings.jpg',
    alt:'',
    title:'WINGS Project'
}

ReactDOM.render(
    <React.Fragment>
        <p style={style}>Start React!</p>
        <p>Jsx Basic</p>
        <label htmlFor="name" className="sky">
            <input id="name" type="text" tabIndex="0" />
        </label>
        {/* comment */}
        <p
            // comment
            /* comment
               comment
             */
        > Hello {name}!</p>
        <p>2 ** 3 = {2 ** 3 }</p>
        {/* not escape! <br/> */}
        <p dangerouslySetInnerHTML={{__html:newLine}}></p>
        <a href="{url}">Support Site</a>
        <img {...attrs} />
    </React.Fragment>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
