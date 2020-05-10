import {setMyProfile} from '../Auth/actions';

export const SET_INITIALZE_APP = 'SET_INITIALZE_APP';

export const setInitializeApp = () => ({
  type: SET_INITIALZE_APP,
  payload: true
})

export const setApp = () => (dispatch) => {
  let setMyProfilePromise = dispatch(setMyProfile());
  setMyProfilePromise.then( () => dispatch(setInitializeApp()) )
}