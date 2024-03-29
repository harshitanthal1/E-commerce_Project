// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import your Redux store
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App component with Provider and pass the store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
