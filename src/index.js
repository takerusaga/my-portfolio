import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // 正しいパスを使用
import App from './components/App'; // 正しいパスを使用
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
