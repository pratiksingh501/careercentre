import React, { useState } from "react";

import { ProfileSidebarData } from "../../Data/Data"
import { UilBars } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

// import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <div className='profilesidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >


      <div className="menu">
        {ProfileSidebarData.map((item, index) => {
          return (
           
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <NavLink to={item.path} style={{color:"black", textDecoration:"none", backgroundColor:"transparent"}}>
              <item.icon />
              <span style={{marginLeft:"10px"}}>{item.heading}</span>
              </NavLink>
            </div>
              
           
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          Back
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
