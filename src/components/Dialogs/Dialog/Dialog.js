import React from 'react';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

  const path = "/dialog/" + props.id;   

  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;
