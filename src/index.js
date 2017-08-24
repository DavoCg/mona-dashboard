import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/table.css';
import App from './app';
import serviceWorker from './register-service-worker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
