import './App.css';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Contacts } from './components/Contacts/Contacts';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/login';
import Loading from './components/Common/Loading/Loading';

import { initializeApp } from './redux/reducers/app-reducer';
import React, { lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from './redux/store-redux';
import { Provider } from "react-redux";
import {withSuspense} from './components/hoc/withSuspense';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    
    if(!this.props.initialized) return <Loading />
    
    return (
      
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <div className="app-wrapper-content">
            <Routes>
              
              {/* Дальше : пишеться параметр. ? означає що параметр не обовязковий */}
              <Route path='/profile/:profileId?' element={withSuspense(ProfileContainer)} />
              <Route path='/dialogs' element={withSuspense(DialogsContainer)} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={withSuspense(LoginPage)} />
            </Routes>
        </div>
          </div>
  );
}
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(  
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
  return <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
}

export default SamuraiJSApp;