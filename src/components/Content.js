import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';
import {WithAuthRedirect} from '../HOC/WithAuthRedirect';
import {setUserProfile, setUserProfileStatus, updateProfileStatus, updateMyAvatar} from '../store/MyPosts/actions';
import c from './Content.module.css';

const Content = (props) => {
 
  const profilePage = useSelector((state) => state.posts.profilePage);
  const profileStatus = useSelector((state) => state.posts.profileStatus);
  const myUserId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  let userId = props.match.params.userId;
    
  useEffect( () => {
    if (!userId) {
      userId = myUserId;
    }
    dispatch(setUserProfile(userId));
    dispatch(setUserProfileStatus(userId))
  }, [userId, dispatch])

  const updateAvatar = (e) => {
    dispatch(updateMyAvatar(e.target.files[0]));
  }
  
  if(!profilePage) {
    return <>Loading</>
  }

  const isOwner = !props.match.params.userId;
  
  return (
    <div className = {c.content}>
      <Profile 
        isOwner = {isOwner}
        profileStatus = {profileStatus} 
        profilePage = {profilePage}
        updateProfileStatus = {updateProfileStatus}
        updateAvatar = {updateAvatar}
      />
      <MyPostsContainer 
        profilePage = {profilePage}
      />
    </div>
  )
}

const WithRouterProfile = withRouter(Content);
const WithRedirectProfile = WithAuthRedirect(WithRouterProfile);
export default WithRedirectProfile;