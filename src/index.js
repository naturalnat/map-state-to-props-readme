import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);

//provider is redux compontent that wraps app 
//alerts redux app when change in state and rerenders react 
//pass store to provider as prop so its avail to other components 
//react-redux requires to specify which changes to store state should prompt redrender (this is done via connect)