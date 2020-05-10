import {API} from '../../api/api';
import { stopSubmit } from 'redux-form';

export const SET_AUTH_DATA = "SET_AUTH_DATA";
export const EXIT_PROFILE = "EXIT_PROFILE";
export const SET_CAPTCHA = "SET_CAPTCHA";

export const exitProfile = (email, id, login, isAuth) => ({
  type: EXIT_PROFILE,
  email, 
  id, 
  login, 
  isAuth
})

export const setAuthData = (status, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: status,
  isAuth
})

export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  payload: captcha
})

export const setMyProfile = () => (dispatch) => {
  return API.setAuth()
  .then( (response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthData(response.data.data, true))
    }
  })
}

export const loginProfile = (email, password, rememberMe, captcha) => (dispatch) => {
  API.login(email, password, rememberMe, captcha)
  .then( (response) => {
    if (response.data.resultCode === 0) {
      dispatch(setMyProfile())
    }
    else {
      if (response.data.resultCode === 10) {
        API.getCaptcha()
        .then( (response) => {
          dispatch(setCaptcha(response.data.url))
        })
        }
      dispatch( stopSubmit("login", {_error : response.data.messages} ))
    }
  })
}

export const logoutProfile = () => (dispatch) => {
  API.logout()
  .then( (response) => {
    if (response.data.resultCode === 0) {
      dispatch(exitProfile(null, null, null, false))
    }
  })
}