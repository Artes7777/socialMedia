import {SET_INITIALZE_APP} from './actions';

const initialState = {
  initializeApp : false
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INITIALZE_APP : 
      return {
        ...state,
        initializeApp: action.payload
      }
       default: return state;
  }
}