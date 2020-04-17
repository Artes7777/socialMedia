import {SET_POST, CLEAN_INPUT, INPUT_CHANGE, SET_PROFILE_PAGE} from './actions';

const initialState = {
  posts : [
    {message: "Hi", like: 4, id: 1},
    {message: "Hello", like: 1, id: 2},
    {message: "Whatsap", like: 7, id: 3},
    {message: "Go home", like: 0, id: 4},
  ],
  input : "",
  profilePage: null,
}

export const myPostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POST : 
    return { 
      ...state,
      posts: [
        ...state.posts,
        action.payload
      ]
    }
    case INPUT_CHANGE :
      return {
        ...state,
        input: action.payload
      } 
    case CLEAN_INPUT: 
    return {
      ...state,
      input: action.payload
    }
    case SET_PROFILE_PAGE : 
      return {
        ...state,
        profilePage: action.payload
      }
    default: return state;
  }
}