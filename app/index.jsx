//import { element } from './component';
//var component = require('./component')
//require('./main.css');
//var app = document.createElement('div');
//document.body.appendChild(app);
//app.appendChild(element());
import './main.css';
import './style.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store_index.js';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import App2 from './components/App2.jsx';
ReactDOM.render(<App />, document.getElementById('app3'));
ReactDOM.render(<App />, document.getElementById('app2'));
ReactDOM.render(<Provider store={store}><App2 /></Provider>, document.getElementById('app'));
