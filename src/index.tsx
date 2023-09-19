import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

