import {API} from '../../api/api';

export const SET_MESSAGES = "SET_MESSAGE";
export const SET_FETCHING = "SET_FETCHING";
export const SET_MY_MESSAGE = "SET_MY_MESSAGE";
export const SET_USERS_DIALOGS = "SET_USERS_DIALOGS";
export const SET_MESSAGE_COUNT = 'SET_MESSAGE_COUNT';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: messages
})

export const setMessage = message => ({
  type: SET_MY_MESSAGE,
  payload: message
})

export const fetching = (isFetching) => ({
  type: SET_FETCHING,
  payload: isFetching
})

export const getUsersDialogs = (users) => ({
  type: SET_USERS_DIALOGS,
  payload: users
})

export const setMessageCount = (count) => ({
  type: SET_MESSAGE_COUNT,
  payload: count
})

export const deleteChosedMessage = (id) => ({
  type: DELETE_MESSAGE,
  payload: id
})


export const getUserMessages = (userId) => (dispatch) => {
  dispatch(fetching(true));
  API.getUsersChat(userId)
  .then((response) => {
    dispatch(setMessages(response.data.items));
    dispatch(fetching(false));
    
  })
}

export const sendUserMessages = (userId, message) => (dispatch) => {
  API.sendMessage(userId, message)
  .then((response) => {
    dispatch(setMessage(response.data.data.message))
  })
  API.refreshLastDialogOnTop(userId)
}

export const getAllUsersDialogs = () => (dispatch) => {
  dispatch(fetching(true));
  API.getAlldialogs()
  .then((response) => {
    dispatch(getUsersDialogs(response.data))
    dispatch(fetching(false));
  })
}

export const newMessageCount = () => (dispatch) => {
  API.getNewMessageCount()
  .then((response) => {
    dispatch(setMessageCount(response.data))
  })
}

export const deleteMyMessage = (messageId) => (dispatch) => {
  API.deleteMessage(messageId)
  .then((response) => {
    if(response.data.resultCode === 0) {
      dispatch(deleteChosedMessage(messageId))
    }
  })
}

