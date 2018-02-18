import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDrzKn5dQGcbyW5dthYuUCs53oswggB4PQ',
  authDomain: 'react-phones.firebaseapp.com',
  databaseURL: 'https://react-phones.firebaseio.com',
  projectId: 'react-phones',
  storageBucket: 'react-phones.appspot.com',
  messagingSenderId: '989699814667',
};
firebase.initializeApp(config);

/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
