import React from 'react';
import s from './Dialog.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message';
import {Textarea} from '../../common/elements';
import {required, maxLengthCreator} from '../../common/validators';
import { Field, reduxForm } from 'redux-form';
 
const Dialogs = (props) => {

  if (props.isFetching) return <div>Загрузка...</div> 

  return (
    <div className = {s.content}>
      {!props.allDialogs ?
      <div className = {s.users}>
        <div>
          { props.users.map((user) => {
           return <Dialog 
            name = {user.userName} 
            key = {user.id} 
            id = {user.id} 
           />
          })}
         </div>
      </div>
      :
      <div className = {s.messages}>
        {props.isFetching ? <div>Загрузка...</div> :
        <>
          <div>
            { props.messages.map((message) => {
            return <Message 
              myId = {props.myId}
              id = {message.id}
              deleteMessage = {props.deleteMessage}
              viewed = {message.viewed}
              senderId = {message.senderId}  
              message = {message.body} 
              key = {message.id}/>
            })}
          </div>
          <ReduxMessageForm onSubmit = {props.sendMessage}/>
        </>
        }
      </div>
    }
    </div>
  )
}

const MessageForm = (props) => {

  return (
      <form onSubmit = {props.handleSubmit}>
        <div>
          <Field 
            name = 'message' 
            placeholder = 'Введите сообщение' 
            component = {Textarea}
            validate = {[required , maxSymbols30]}
          />
        </div>
        <div>
          <button>Добавить сообщение</button>
        </div>
      </form>
  )
}
const maxSymbols30 = maxLengthCreator(30);
const ReduxMessageForm = reduxForm({
  form: 'messages'
})(MessageForm)

export default Dialogs;