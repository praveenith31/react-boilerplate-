import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(Reducers, composeWithDevTools(
  applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
