import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import ProfileMainDash from '../components/ProfileMainDash/ProfileMainDash';
import RightSide from '../components/RigtSide/RightSide';
import "../style.css"


const Profile = () => {
  return (
      <>
       <div className="line"></div>
        <div className="AppGlass">
        <Sidebar/>
        <ProfileMainDash/>
        <RightSide/>
      </div>
      </>

 
  )
}

export default Profile