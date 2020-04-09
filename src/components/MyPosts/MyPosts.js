import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  const addPost = () => {
     props.addPostClick()
  }

  const onChange = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div>
      <div>
        ava + description
      </div>
      <div>
        MyPosts
      </div>
      <div>
        <textarea value= {props.value} onChange = {onChange}></textarea> 
      </div>
      <div>
       <button onClick = {addPost}>Add post</button>
      </div>
        {props.posts.map(post => {
          return <Post message = {post.message} like = {post.like} id = {post.id} key = {post.id}/>
          }
        )}   
    </div>
  )
}

export default MyPosts;
