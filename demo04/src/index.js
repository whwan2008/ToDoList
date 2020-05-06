import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList.js'
import {Provider} from 'react-redux'
import store from './store'

const App=(
    <Provider store={store}>
        <ToDoList />
    </Provider>

)

ReactDOM.render(App,document.getElementById('root'));