import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from "./servicesState";
import servicesSaga from './servicesSaga';

const container = document.getElementById('root');
const root = createRoot(container);

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    services: servicesReducer
  },
  middleware: [saga]
});
saga.run(servicesSaga);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
