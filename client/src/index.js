import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
//deprecated여도 그냥 써도 괜찮다는 문서가 나옴
import {createStore} from 'redux';

const BannerState = "banner";

function banneraction (state= BannerState, action){
  if(action.type === "action"){
    state = "banneractive"
    return state
  }
  else if(action.type === "notaction"){
    state = "banner"
    return state
  }
  else{
    return state
  }
}

let store = createStore(banneraction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
