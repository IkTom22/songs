import React from 'react';
import ReactDOM from 'react-dom';
// By convention, we name component variables with capital
// {} means we want to import the specific 'named' action function to this file
// by default, webpack will choose index.js in the directory if you don't specify
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);