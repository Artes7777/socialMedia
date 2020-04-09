import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setMessage, cleanInput, inputChange} from '../../store/Dialogs/actions';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  
  const users = useSelector((state) => state.dialogs.users);
  const messages = useSelector((state) => state.dialogs.messages);
  const input = useSelector((state) => state.dialogs.input);
  const dispatch = useDispatch();

  const onChange = (text) => {
    dispatch(inputChange(text))
  }

  const addDialogMessage = () => {
    const message = {
      massege: input,
      id: 8
    }
    dispatch(setMessage(message));
    dispatch(cleanInput());
  }

  return (
   <Dialogs 
     users = {users} 
     messages = {messages}  
     itputValue = {input} 
     addDialogMessage ={addDialogMessage}
     onChange = {onChange}
   />
  )
}

export default DialogsContainer;