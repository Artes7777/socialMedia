import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addPost} from '../../store/MyPosts/actions';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  
  const addPostClick = useCallback( value => {
    const post = {
      message: value, like: 0, id: 7
    };
     dispatch(addPost(post));
  }, [dispatch])

 
  return (
    <MyPosts 
      posts = {posts} 
      profilePage = {props.profilePage}
      addPostClick = {addPostClick}
    />
  )
}

export default MyPostsContainer;
