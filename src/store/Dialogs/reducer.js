import {SET_MESSAGES, SET_FETCHING, SET_MY_MESSAGE, SET_USERS_DIALOGS, SET_MESSAGE_COUNT, DELETE_MESSAGE} from './actions';

const initialState = {
  users : [],
  messages : [],
  isFetching: false,
  newMessageCount: 0
}

export const myDialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGES : 
    return { 
      ...state,
      messages: action.payload
    }
    case SET_FETCHING :
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_MY_MESSAGE : 
      return { 
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }
    case SET_USERS_DIALOGS : 
      return {
        ...state,
        users: action.payload
      }  
    case SET_MESSAGE_COUNT :
      return {
        ...state,
        newMessageCount: action.payload
      }
    case DELETE_MESSAGE : 
    return {
      ...state,
      messages: state.messages.filter((m) => m.id !== action.payload)
    }
    default: return state;
  }
}