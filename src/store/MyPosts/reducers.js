import {SET_POST, CLEAN_INPUT, INPUT_CHANGE} from './actions';

const initialState = {
  posts : [
    {message: "Hi", like: 4, id: 1},
    {message: "Hello", like: 1, id: 2},
    {message: "Whatsap", like: 7, id: 3},
    {message: "Go home", like: 0, id: 4},
  ],
  input : "",
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
    default: return state;
  }
}