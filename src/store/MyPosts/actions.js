export const SET_POST = "SET_POST";
export const CLEAN_INPUT = "CLEAN_INPUT";
export const INPUT_CHANGE = "INPUT_CHANGE";

export const addPost = newPost => ({
  type: SET_POST,
  payload: newPost
})

export const cleanInput = () => ({
  type: CLEAN_INPUT,
  payload: ""
})

export const inputChange = event => ({
  type: INPUT_CHANGE,
  payload: event
})

