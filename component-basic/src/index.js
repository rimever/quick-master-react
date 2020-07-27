import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyHello from "./MyHello";
import MyType from "./MyType";
import * as serviceWorker from './serviceWorker';
import MyAttrMulti from "./MyAttrMulti";
import MyHelloContent from "./MyHelloContent";
import MyBook from "./MyBook";

const data = {
  name:'Yamada Taro',
  age:18,
  sex:'male',
}
const book = {
  isbn:'WGS-JST-001',
  title:'quick start webpack',
  price:454,
  published:'WINGS Project'
};

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <MyHello name="Yamada" />
      <MyType value="Yamada" />
      <MyType value={"Suzuki"} />
      <MyType value={108} />
      <MyType value={true} />
      <MyType value={['peach','orange']} />
      <MyType value={{name:"Yamada Taro",age:40}} />
      <MyType value={() => console.log('hoge')} />
      <MyAttrMulti {...data} />
      <MyHelloContent>
        <b>Yamada</b>
      </MyHelloContent>
      <MyBook info={book} />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
