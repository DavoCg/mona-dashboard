import React, { Component } from 'react';
import {Provider} from 'react-redux';
import createStore from './store';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import MainRouter from './router';

const history = createHistory();
const store = createStore({}, history);

export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MainRouter/>
                </ConnectedRouter>
            </Provider>
        );
    }
}