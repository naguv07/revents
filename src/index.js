import React from 'react';
import ReactDOM from 'react-dom';
import './app/layouts/styles.css';
import App from './app/layouts/App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root')
function render(){
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,rootEl);
}
if(module.hot){
  module.hot.accept('./app/layouts/App.jsx',function(){
    setTimeout(render)
  })
}
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
