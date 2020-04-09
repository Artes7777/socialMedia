export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAN_INPUT = "CLEAN_INPUT";
export const INPUT_CHANGE = "INPUT_CHANGE";

export const setMessage = newMessage => ({
  type: SET_MESSAGE,
  payload: newMessage
})

export const cleanInput = () => ({
  type: CLEAN_INPUT,
  payload: ""
})

export const inputChange = text => ({
  type: INPUT_CHANGE,
  payload: text
})
