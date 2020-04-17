import {SET_USERS, FOLOW_USER, UNFOLOW_USER, CHOSE_PAGE, TOGGLE_FETCHING, SET_BUTTON_STATUS} from './actions';

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 50,
  isFetching: false,
  buttonStatus: [],
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
      case CHOSE_PAGE : 
        return {
          ...state,
          currentPage: action.payload
        }
      case TOGGLE_FETCHING :
        return {
          ...state,
          isFetching: action.payload
        }
      case SET_BUTTON_STATUS :
        return {
          ...state,
          buttonStatus: action.status ? 
          [...state.buttonStatus, action.id] :
          state.buttonStatus.filter(id => id !== action.id )
        }
      default: return state;
  }
}