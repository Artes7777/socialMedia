import React, { useEffect } from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CssDischarge.css';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Menu from './components/Menu';
import WithRouterProfile from './components/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/LoginContainer';
import {setApp} from './store/App/actions';
import {newMessageCount} from './store/Dialogs/actions';


const App = () => {

  const initializeApp = useSelector((state) => state.app.initializeApp)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApp());
    dispatch(newMessageCount());
  })

  if (!initializeApp) return <div>Загрузка</div>
   
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <HeaderContainer /> 
        <Menu />
        <Switch>
          <Route component = {WithRouterProfile} path = "/profile/:userId?" />
          <Route component = {DialogsContainer} path = "/dialogs/:userId?" />
          <Route component = {UsersContainer} path = "/users" />
          <Route component = {LoginContainer} path = "/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
