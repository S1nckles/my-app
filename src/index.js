import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import SamuraiJSApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(  
    <SamuraiJSApp />
  );
//Коли ми пишемо параметр з душками, то ми його викликаємо, а без просто передаємо

reportWebVitals();