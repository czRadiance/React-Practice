import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp.js';
import Store from './Store.js'

ReactDOM.render(
    <Provider store={Store}>
        <TodoApp />
    </Provider>, 
    document.getElementById('root')
);
