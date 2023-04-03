import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import App from './app';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import AuthTokenContextProvider from './components/context/auth-token-context-provider';
import ThemeContextProvider from './components/context/theme-context-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthTokenContextProvider>
      <ThemeContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeContextProvider>
    </AuthTokenContextProvider>
  </React.StrictMode>
)
