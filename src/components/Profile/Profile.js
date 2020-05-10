import React, { useState } from 'react';
import c from './Profile.module.css';
import Status from './Status';
import Aquila from '../../img/ava.png';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/elements';
import ProfileInfo from './ProfileInfo';
import {updateProfileInfo} from '../../store/MyPosts/actions';
import { useDispatch } from 'react-redux';

const Profile = (props) => {

  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const enableEditMode = () => {
    setEditMode(true);
  }

  const changeProfileInfo = (formData) => {
    dispatch(updateProfileInfo(formData))
    .then(() => {
      setEditMode(false);
    })
  }

  return (
    <div>
      <div className = {c.avatar}>
        <img 
          alt = "Аватар"
          src = {props.profilePage.photos.large || Aquila}
        />
        {props.isOwner && <input type = 'file' onChange = {props.updateAvatar}/>}
        {!editMode ? 
          <ProfileInfo 
          enableEditMode = {enableEditMode} 
          profilePage = {props.profilePage} /> :

          <ProfileFormRedux 
            profilePage = {props.profilePage} 
            initialValues = {props.profilePage} 
            onSubmit = {changeProfileInfo}
          />
        }     
        <Status 
          isOwner = {props.isOwner}
          profileStatus = {props.profileStatus}
          updateProfileStatus = {props.updateProfileStatus}
        />
      </div>
    </div>
  )
}

export default Profile;


export const ProfileForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <button>Save</button>
      <div><b>Full name :</b> <Field placeholder = 'Fullname' name = 'fullName' component = {Input} /> </div>
        <div><b>Looking for a job :</b> <Field name = 'lookingForAJob' type = 'checkbox' component = {Input} /></div>
        <div><b>My skills :</b> <Field placeholder = 'Looking for a job discription' name = 'lookingForAJobDescription' component = {Textarea} /></div>
        <div><b>About me :</b> <Field placeholder = 'About me' name = 'aboutMe' component = {Textarea} /></div>
        <div><b>Contacts :</b> {Object.keys(props.profilePage.contacts).map( (key) => {
          return <div key ={key}><b>{key} : </b><Field name = {"contacts." + key} placeholder = {key} component = {Input}/></div>
        })}</div>
        <div>{props.error && <span>{props.error}</span>}</div>
    </form>
  )
}

const ProfileFormRedux = reduxForm({
  form: 'profileForm'
})(ProfileForm)