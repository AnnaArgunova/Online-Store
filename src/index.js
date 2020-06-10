import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './Pages/App';
import { storeCreator } from './Redux/index';
import { Provider } from 'react-redux';
import {config} from 'Constants/auth0';
import { Auth0Provider } from "Pages/Blocks/Auth0";
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserHistory } from "history";


const history = createBrowserHistory()
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const store = storeCreator()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
    <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
      <App />
      </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


