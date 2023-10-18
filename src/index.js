import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntareTree = (state) => {
  root.render(  
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}
//Коли ми пишемо параметр з душками, то ми його викликаємо, а без просто передаємо

renderEntareTree(store.getState());

store.subscribe(renderEntareTree);

reportWebVitals();