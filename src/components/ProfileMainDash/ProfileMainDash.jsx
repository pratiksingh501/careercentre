import React from 'react';
import './ProfileMainDash.css';
import ProfileSideBar from "./ProfileSideBar"



const ProfileMainDash = () => {
  return (
    <div className='ProfileMainDash'>
        <div className="top">
            <div className="details">
            <h1>Muskan Singh</h1>
            <h5>Studying in IIM Mumbai</h5>
            </div>
            <div className="pic">
                <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           
        </div>
        <div className="profileDashboard">
        <ProfileSideBar/>
         <div className="profileInfo"></div>
        </div>
    </div>
  )
}

export default ProfileMainDash