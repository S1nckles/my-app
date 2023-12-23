import './App.css';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Contacts } from './components/Contacts/Contacts';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
            {/* Дальше : пишеться параметр. ? означає що параметр не обовязковий */}
            <Route path='/profile/:profileId?' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
