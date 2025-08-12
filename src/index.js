import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // {}内に任意の名称を書く。大抵は右端と同じにする。

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
