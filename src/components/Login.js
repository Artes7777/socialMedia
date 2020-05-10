import React from 'react';
import { Redirect } from "react-router-dom";
import { Field, reduxForm  } from 'redux-form';
import {Input} from '../common/elements';
import {required} from '../common/validators';

const Login = (props) => {

  if (props.isAuth) return <Redirect to = '/profile'/>

  return (
    <div>
      <div>LOGIN</div>
      <LoginReduxForm captcha = {props.captcha} onSubmit = {props.login}/>
    </div>
  )
}

const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div><Field name = 'email' placeholder = 'email' validate ={[required]} component = {Input} /></div>
      <div><Field name = 'password' type = 'password' placeholder = 'password' validate={[required]} component = {Input} /></div>
      <div><Field name = 'rememberMe' type = 'checkbox' component = {Input} />запомнить</div>
      <div>{props.error && <span>{props.error}</span>}</div>
      {props.captcha && 
      <div>
        <img src = {props.captcha} alt = "" />
        <div>
          <Field name = 'captcha' placeholder = 'password' component = {Input} />
        </div>
      </div> 
      }
      <div><button>Войти</button></div>
  </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login