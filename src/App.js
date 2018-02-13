import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: 'AIzaSyBLZyg8TId8VN1BggL4uBSdhy2Vwz4iEiE',
	    authDomain: 'manager-118f9.firebaseapp.com',
	    databaseURL: 'https://manager-118f9.firebaseio.com',
	    projectId: 'manager-118f9',
	    storageBucket: 'manager-118f9.appspot.com',
	    messagingSenderId: '510882081711'
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
};

export default App;