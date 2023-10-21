import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux';
import App from './App';
import './index.css';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntareTree = (state) => {
  root.render(  
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
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