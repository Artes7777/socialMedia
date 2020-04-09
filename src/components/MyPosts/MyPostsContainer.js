import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addPost, cleanInput, inputChange} from '../../store/MyPosts/actions';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  const posts = useSelector((state) => state.posts.posts);
  const input = useSelector((state) => state.posts.input);
  const dispatch = useDispatch();
  
  const addPostClick = () => {
    const post = {
      message: input, like: 0, id: 7
    };
     dispatch(addPost(post));
     dispatch(cleanInput());
  }

  const onChange = (text) => {
    dispatch(inputChange(text));
  }

  return (
    <MyPosts posts = {posts} value = {input} onChange = {onChange} addPostClick = {addPostClick}/>
  )
}

export default MyPostsContainer;
