import React, { Component } from 'react';
import Container from './Container';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const App = () => {
  return (
  	<Provider store={store}>
    	{() => <Container /> }
  	</Provider>
	);
};

export default App;
