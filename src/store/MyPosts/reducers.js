import {SET_POST, SET_PROFILE_PAGE, PROFILE_STATUS, SET_AVATAR} from './actions';

const initialState = {
  posts : [
    {message: "Hi", like: 4, id: 1},
    {message: "Hello", like: 1, id: 2},
    {message: "Whatsap", like: 7, id: 3},
    {message: "Go home", like: 0, id: 4},
  ],
  profilePage: null,
  profileStatus: "Ваш статус",
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
    case SET_PROFILE_PAGE : 
      return {
        ...state,
        profilePage: action.payload
      }
    case PROFILE_STATUS: 
      return {
        ...state,
        profileStatus : action.payload
      }
    case SET_AVATAR :
      return {
        ...state,
        profilePage : {...state.profilePage, photos: action.payload}
      }
    default: return state;
  }
}