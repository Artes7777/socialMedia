import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
  return (
    <div className = {s.post}>
      <div className = {s.img}>
        <img src ="https://i.ytimg.com/vi/GDPn-jzG2fU/maxresdefault.jpg" alt="" /> 
      </div>
      <div className = {s.message}> 
        {props.message}
      </div>
      <div> like {props.like}</div>
    </div>
  )
}

export default Post;