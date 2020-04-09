import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div>
       <div className = {c.topImg}>
        <img 
          alt = ""
          src = "http://img0.joyreactor.cc/pics/post/full/Sci-Fi-art-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE-2601060.jpeg" 
        />
      </div>
      <div className = {c.avatar}>
        <img 
          alt = "Аватар"
          src = "https://i.ytimg.com/vi/GDPn-jzG2fU/maxresdefault.jpg"
        />
      </div>
    </div>
  )
}

export default Profile;