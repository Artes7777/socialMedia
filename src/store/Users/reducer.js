import {SET_USERS, FOLOW_USER, UNFOLOW_USER} from './actions';

const initialState = {
  users: [],
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS : 
      return {
        ...state,
        users: action.payload
      }
    case FOLOW_USER : 
      return {
        ...state,
        users: state.users.map( (user) => {
          if(user.id === action.payload){
            return {...user, followed: true}
          }
          return user;
        })
      }
      case UNFOLOW_USER : 
        return {
          ...state,
          users: state.users.map( (user) => {
            if(user.id === action.payload){
              return {...user, followed: false}
            }
            return user;
          })
        }
      default: return state;
  }
}