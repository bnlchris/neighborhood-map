import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import file to start Service Worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Start Service Worker when page is online
serviceWorker.register();