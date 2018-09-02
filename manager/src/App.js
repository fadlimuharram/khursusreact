import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAfX1ua35SlOKfW0JaANrhCbeMZiXE8ASE',
            authDomain: 'managerproject-214919.firebaseapp.com',
            databaseURL: 'https://managerproject-214919.firebaseio.com',
            projectId: 'managerproject-214919',
            storageBucket: 'managerproject-214919.appspot.com',
            messagingSenderId: '939487522038'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
