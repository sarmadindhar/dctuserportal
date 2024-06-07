import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import './utils/i18n.js'; // Import the i18n configuration
import { ConfigProvider, Button, DatePicker } from 'antd';
const customTheme = {
  token: {
    "colorPrimary": "#f77860",
    "colorInfo": "#f77860",
    "colorSuccess": "#2f54eb",
    "borderRadius": 14,
    "Input": {
      "controlHeight": 50,
      "colorBorder": "rgb(247, 120, 96)"
    },
    "Select": {
      "controlHeight": 50,
      "colorBorder": "rgb(247, 120, 96)"
    },
    "Form": {
      "itemMarginBottom": 21,

    },
    "Button": {
      "controlHeight": 51
    },
    "DatePicker": {
      "controlHeight": 50,
      "colorBorder": "rgb(247, 120, 96)"
    }
  },
};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </React.StrictMode>,

  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <Router>
      <ConfigProvider theme={customTheme}>
        <App/>
      </ConfigProvider>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    />
  </Router>

  </PersistGate>
  </Provider>
);
