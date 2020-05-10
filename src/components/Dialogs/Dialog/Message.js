import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className = {props.myId === props.senderId ? s.floatright : s.floatleft }>
      {props.message} <button onClick = {() => props.deleteMessage(props.id)}>Удоли</button> 
      {props.myId === props.senderId ?   
        <>{props.viewed ? " Прочитано" : " Непрочитано"}</> : 
        null 
      }
    </div>
  )
}

export default Message;
