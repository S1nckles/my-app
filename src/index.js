import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import App from './App';
import './index.css';
import { addPost, addMessage, updateNewPostText, updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntareTree = (state) => {
  root.render(  
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>
  );
}

renderEntareTree(state);

subscribe(renderEntareTree);

reportWebVitals();