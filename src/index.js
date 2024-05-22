import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import App from './App';

// Найдите корневой элемент в вашем HTML
const rootElement = document.getElementById('root');

// Создайте корень для вашего приложения
const root = ReactDOM.createRoot(rootElement);

// Отрендерите ваше приложение с провайдером
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
