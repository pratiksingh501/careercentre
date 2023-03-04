import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import "../style.css"


const Dashboard = () => {
  return (
      <>
       <div className="line"></div>
        <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
      </>

 
  )
}

export default Dashboard