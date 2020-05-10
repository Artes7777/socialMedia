import {API} from '../../api/api';
import { stopSubmit } from 'redux-form';

export const SET_POST = "SET_POST";
export const SET_PROFILE_PAGE = "SET_PROFILE_PAGE";
export const PROFILE_STATUS = "PROFILE_STATUS";
export const SET_AVATAR = 'SET_AVATAR';

export const addPost = newPost => ({
  type: SET_POST,
  payload: newPost
})

export const setUserPage = userPage => ({
  type: SET_PROFILE_PAGE,
  payload: userPage
})

export const profileStatus = (status) => ({
  type: PROFILE_STATUS,
  payload: status
})

export const setAvatar = (avatar) => ({
  type: SET_AVATAR,
  payload: avatar
})


export const setUserProfile = (userId) => (dispatch) => {
  API.setProfile(userId)
  .then((response) => {
    dispatch(setUserPage(response.data));
 })
}

export const setUserProfileStatus = (userId) => (dispatch) => {
  API.setProfileStatus(userId)
  .then((response) => {
    dispatch(profileStatus(response.data))
  })
}

export const updateProfileStatus = (status) => (dispatch) => {
  API.udpateProfileStatus(status)
  .then((response) => {
    if(response.status === 200 && response.data.resultCode === 0) {

      dispatch(profileStatus(status))
    }
  })
}

export const updateMyAvatar = (photoFile) => (dispatch) => {
  API.updateAvatar(photoFile)
  .then((response) => {
    if( response.data.resultCode === 0) {
      dispatch(setAvatar(response.data.data.photos))
    }
  })
}

export const updateProfileInfo = (profile) => async(dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await API.updateProfileInfo(profile);

  if( response.data.resultCode === 0) {
    dispatch(setUserProfile(userId))
  }
  if (response.data.messages.length > 0) {
    const errorLocation = response.data.messages[0].match(/\((.*)\)/)[1].split(">")[1].toLowerCase();
    dispatch(stopSubmit('profileForm', {contacts : { [errorLocation] : response.data.messages[0]} }))
    return Promise.reject(response.data.messages[0]);
  }
}

