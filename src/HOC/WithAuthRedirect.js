import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export const WithAuthRedirect = (Component) => {
  const ContainerRedirect = (props) => {

    const isAuth = useSelector((state) => state.auth.isAuth);

    if(!isAuth) return <Redirect to = '/login'/>
    
    return (
      <Component {...props} />
    )
  }
  return ContainerRedirect;
}