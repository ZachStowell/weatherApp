import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';

import App from './components/App';
import reducers from './reducers';

const logger = createLogger({ collapsed: true });
const stored = persistState(['auth']);
const middlewares = [reduxThunk, logger];

const enhancer = compose(applyMiddleware(...middlewares), stored);

const store = createStore(reducers, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
