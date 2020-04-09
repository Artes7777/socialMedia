import React from 'react';
import s from './Dialog.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message';
 
const Dialogs = (props) => {

  const onChange = (event) => {
    props.onChange(event.target.value)
  }

  const addMessageEnter = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      props.addDialogMessage()
    }
  }

  const addMessage = () => {
      props.addDialogMessage()
  }

  return (
    <div className = {s.content}>
      <div className = {s.users}>
        <div>
          { props.users.map((user) => {
           return <Dialog name = {user.name} key = {user.id} id = {user.id} />
          })}
         </div>
      </div>
      <div className = {s.messages}>
        <div>
          { props.messages.map((message) => {
           return <Message message = {message.massege} key = {message.id}/>
          })}
        </div>
        <div>
          <textarea onKeyPress = {addMessageEnter} onChange = {onChange} value = {props.itputValue}></textarea>
        </div>
        <div>
          <button onClick = {addMessage}>Добавить сообщение</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;