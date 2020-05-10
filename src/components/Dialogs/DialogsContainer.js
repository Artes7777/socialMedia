import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {getUserMessages, sendUserMessages, getAllUsersDialogs, deleteMyMessage} from '../../store/Dialogs/actions';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  
  const users = useSelector((state) => state.dialogs.users);
  const messages = useSelector((state) => state.dialogs.messages);
  const isFetching = useSelector((state) => state.dialogs.isFetching);
  const myId = useSelector((state) => state.auth.id);
  const userId = props.match.params.userId;
  const dispatch = useDispatch();

  useEffect( () => {
    if (!userId) {
      dispatch(getAllUsersDialogs());
    }
    else dispatch(getUserMessages(userId))
  }, [dispatch, userId])

  const sendMessage = (values) => {
    dispatch(sendUserMessages(userId, values.message));
  }

  const deleteMessage = (id) => {
    dispatch(deleteMyMessage(id))
  }

  return (
   <Dialogs 
     users = {users} 
     myId = {myId}
     deleteMessage = {deleteMessage}
     isFetching = {isFetching}
     allDialogs = {userId}
     messages = {messages}  
     sendMessage = {sendMessage}
   />
  )
}

const WithRouterDialogs = withRouter(DialogsContainer);
const WithDialogsRedirect = WithAuthRedirect(WithRouterDialogs);

export default WithDialogsRedirect;