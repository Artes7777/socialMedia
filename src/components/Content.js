import React from 'react';
import c from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';

const Content = () => {
  return (
    <div className = {c.content}>
      <Profile />
      <MyPostsContainer />
    </div>
  )
}

export default Content;