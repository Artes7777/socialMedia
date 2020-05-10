import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {loginProfile} from '../store/Auth/actions';
import Login from './Login';

const LoginContainer = () => {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const captcha = useSelector((state) => state.auth.captcha);
  const dispatch = useDispatch();

  const login = (values) => {
    dispatch(loginProfile(values.email, values.password, values.rememberMe, values.captcha))
  }

  return (
    <Login login = {login} isAuth = {isAuth} captcha = {captcha} />
  )
}

export default LoginContainer;