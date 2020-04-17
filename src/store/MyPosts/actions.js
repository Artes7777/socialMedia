import {API} from '../../api/api';

export const SET_POST = "SET_POST";
export const CLEAN_INPUT = "CLEAN_INPUT";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const SET_PROFILE_PAGE = "SET_PROFILE_PAGE";

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

export const setUserPage = userPage => ({
  type: SET_PROFILE_PAGE,
  payload: userPage
})


export const setUserProfile = (userId) => (dispatch) => {
  API.setProfile(userId)
  .then((response) => {
    dispatch(setUserPage(response.data));
 })
}