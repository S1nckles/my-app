import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux';
import { Provider } from "react-redux";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntareTree = (state) => {
  root.render(  
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
//Коли ми пишемо параметр з душками, то ми його викликаємо, а без просто передаємо

renderEntareTree(store.getState());

store.subscribe ( () => {
  let state = store.getState();
  renderEntareTree(state);
})

reportWebVitals();