import {SET_AUTH_DATA} from './actions';

const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_DATA : 
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
       default: return state;
  }
}