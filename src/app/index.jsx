//import { element } from './component';
//var component = require('./component')
//require('./main.css');
//var app = document.createElement('div');
//document.body.appendChild(app);
//app.appendChild(element());
import './main.css';
import './style.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor } from './store/store_index.js';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import App2 from './components/App2.jsx';
import App3 from './components/App3.jsx';
import { PersistGate } from 'redux-persist/integration/react';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";

//ReactDOM.render(<App />, document.getElementById('app3'));
ReactDOM.render(<App />, document.getElementById('app2'));
//ReactDOM.render(<Provider store={store}><App2 /></Provider>, document.getElementById('app'));
ReactDOM.render(<Provider store={store}><App3 /></Provider>, document.getElementById('columnz'));
ReactDOM.render(<Provider store={store}><BrowserRouter><PersistGate persistor={persistor}><App2 /></PersistGate></BrowserRouter></Provider>, document.getElementById('app'));
//module.hot.accept();
