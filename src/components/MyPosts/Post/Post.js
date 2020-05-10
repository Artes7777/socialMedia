import React from 'react';
import s from'./Post.module.css';
import Aquila from '../../../img/ava.png';

const Post = (props) => {
  return (
    <div className = {s.post}>
      <div className = {s.img}>
        <img src = {props.profilePage.photos.small || Aquila} alt="" /> 
      </div>
      <div className = {s.message}> 
        {props.message}
      </div>
      <div> like {props.like}</div>
    </div>
  )
}

export default Post;