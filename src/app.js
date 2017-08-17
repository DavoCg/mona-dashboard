import React, { Component } from 'react';
import {Provider} from 'react-redux';
import createStore from './store';
import {Home} from './pages';

const store = createStore({});

export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}