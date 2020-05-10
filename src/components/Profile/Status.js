import React, { useState} from 'react';
import { useDispatch } from 'react-redux';

 const Status = (props) => {

  const [status, setStatus] = useState(props.profileStatus);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const enableEditMode = () => {
    setEditMode(true);
  }

  const disableEditMode = () => {
    setEditMode(false);
    dispatch(props.updateProfileStatus(status));
  }

  const statusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
     { editMode && props.isOwner ? 
      <input 
         onChange = {statusChange} 
         autoFocus = {true} onBlur = {disableEditMode} 
         value = {status} 
       /> :
       <div><b>Status : </b><span onClick = {enableEditMode}>{props.profileStatus || "Введите статус"}</span></div>  
      }
    </div>
   )
} 

export default Status;