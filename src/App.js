import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './CssDischarge.css';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Menu from './components/Menu';
import WithRouterProfile from './components/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <HeaderContainer /> 
        <Menu />
        <Route render = { () => <WithRouterProfile/>} path = "/profile/:userId?" />
        <Route component = {DialogsContainer} path = "/dialogs" />
        <Route component = {UsersContainer} path = "/users" />
      </div>
    </BrowserRouter>
  );
}

export default App;
