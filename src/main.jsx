import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import App from './app';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import AuthTokenContextProvider from './components/context/auth-token-context-provider';
import ThemeContextProvider from './components/context/theme-context-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <AuthTokenContextProvider>
        <ThemeContextProvider>

          <App />

        </ThemeContextProvider>
      </AuthTokenContextProvider>
    </Provider>
  </React.StrictMode>
)
