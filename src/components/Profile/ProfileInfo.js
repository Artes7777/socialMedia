import React from 'react';

const ProfileInfo = (props) => {
  return (
    <div>
      <button onClick = {props.enableEditMode}>Edit</button>
      <div><b>Full name :</b> {props.profilePage.fullName }</div>
        <div><b>Looking for a job :</b> {props.profilePage.lookingForAJob ? "yes" : "no"}</div>
        <div><b>My skills :</b> {props.profilePage.lookingForAJobDescription}</div>
        <div><b>About me :</b> {props.profilePage.aboutMe}</div>
        <div><b>Contacts :</b> {Object.keys(props.profilePage.contacts).map( (key) => {
          return <ProfileConstacts key ={key} contactKey = {key} valueKey = {props.profilePage.contacts[key]} />
        })}</div>
    </div>
  )
}
 
export default ProfileInfo;

export const ProfileConstacts = ({contactKey, valueKey}) => {
  return (
    <div><b>{contactKey} :</b> {valueKey}</div> 
  )
}