import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />,
        <Login/>
    </div>,

    document.getElementById('root'));
registerServiceWorker();