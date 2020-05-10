import React from 'react';
import s from './elements.module.css'; 

export const FormControl = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div className = {hasError ? s.form : null}>
        {props.children}
      </div>
      <div>
        {hasError ? <span className = {s.error}>{meta.error}</span> : null}
      </div>
    </div>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps } = props;
  return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps } = props;
  return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}