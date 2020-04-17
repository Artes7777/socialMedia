import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';
import {setUserProfile} from '../store/MyPosts/actions';
import c from './Content.module.css';


const Content = (props) => {
 
  const profilePage = useSelector((state) => state.posts.profilePage);
  const dispatch = useDispatch();
  let userId = props.match.params.userId;
  
  useEffect( ()=> {
    if (!userId) {
      userId = 7126;
    }
    dispatch(setUserProfile(userId)) }, [userId])
   
  return (
  
    <div className = {c.content}>
      <Profile profilePage = {profilePage}/>
      <MyPostsContainer />
    </div>
  )
}

const WithRouterProfile = withRouter(Content);
export default WithRouterProfile;