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
import Loading from './components/Common/Loading/Loading';
import { initializeApp } from './redux/reducers/app-reducer';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    
    if(!this.props.initialized) return <Loading />
    
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
}

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//       // let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//           <Component
//               {...props}
//               router={{ navigate, params }}
//           />
//       );
//   }
//   return ComponentWithRouterProp;
// }

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(  
  connect(mapStateToProps, {initializeApp})
  )(App);
