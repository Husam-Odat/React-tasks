// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store you created
import UserList from './userList'; // Import your UserList component

ReactDOM.render(
  <Provider store={store}>
    <UserList />
  </Provider>,
  document.getElementById('root')
);
