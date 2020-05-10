import {SET_AUTH_DATA, EXIT_PROFILE, SET_CAPTCHA} from './actions';

const initialState = {
  email: null,
  id: null,
  login: null,
  captcha: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_DATA : 
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth
      }
    case EXIT_PROFILE : 
      return {
        ...state,
        email: action.email,
        id: action.id,
        login: action.login,
        isAuth: action.isAuth
      }
    case SET_CAPTCHA : 
      return {
        ...state,
        captcha: action.payload
      }
       default: return state;
  }
}