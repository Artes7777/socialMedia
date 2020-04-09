import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './CssDischarge.css';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header /> 
        <Menu />
        <Route render = { ()=> <Content />} path = "/" exact/>
        <Route component = {DialogsContainer} path = "/dialogs" />
        <Route component = {UsersContainer} path = "/users" />
      </div>
    </BrowserRouter>
  );
}

export default App;
