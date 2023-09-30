import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';

import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Contacts } from './components/Contacts/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/contacts' elementm={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
