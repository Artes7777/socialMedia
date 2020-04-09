import {SET_MESSAGE, CLEAN_INPUT, INPUT_CHANGE} from './actions';

const initialState = {
  users : [
    {name: "Вася", id: 1}, 
    {name: "Петя", id: 2}, 
    {name: "Витя", id: 3}, 
    {name: "Гриша", id: 4}, 
    {name: "Петух", id: 5}, 
  ],
  messages : [
      {massege: "Hello", id: "1"}, 
      {massege:"How are you?", id: "2"}, 
      {massege:"Good for you", id: "3"}
  ],
  input : "",
}

export const myDialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGE : 
    return { 
      ...state,
      messages: [
        ...state.messages,
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