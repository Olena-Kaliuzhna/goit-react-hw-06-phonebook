import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
