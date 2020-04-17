import {API} from '../../api/api';

export const SET_AUTH_DATA = "SET_AUTH_DATA";

export const setAuthData = (status) => ({
  type: SET_AUTH_DATA,
  payload: status
})

export const setMyProfile = () => (dispatch) => {
  API.setAuth()
  .then( (response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthData(response.data.data))
    }
  })
}