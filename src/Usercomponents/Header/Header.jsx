import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

import Ellipse from "../../assests/images/Ellipse.png";

const coursesArray = [
  {
    display: "Web Development",
    url: "courses/web",
  },
  {
    display: "App Develpment",
    url: "courses/app",
  },
  {
    display: "Game Develpment",
    url: "courses/game",
  },
  {
    display: "Mastery in Python",
    url: "courses/app",
  },
];

const profileArray = [
  {
    display: "Dashboard",
    url: "dashboard",
  },
  {
    display: "Profile",
    url: "dashboard/profile",
  },
  {
    display: "Logout",
    url: "dashboard/logout",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };



  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1" style={{fontFamily: "Gilroy-Bold"}}>
              <i class="ri-pantone-line" style={{color:"#16a085"}}></i> Career Center
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                <li className="nav__item" >
                <span> 
                  <NavLink
                    to="/"
                    style={{fontFamily:"Gilroy-Medium", backgroundColor:"#fff"}}
                  >
                   Home
                  </NavLink>
                  </span>
                  <span  style={{marginLeft:"20px", fontFamily:"Gilroy-Medium"}} onClick={handleOpenUserMenu2}>Courses</span>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser2}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser2)}
                    onClose={handleCloseUserMenu2}
                  >
                    {coursesArray.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu2} style={{textAlign:"left"}}>
                          <Typography textAlign="center" style={{ fontFamily:"Gilroy-Medium", textDecoration:"none"}}>
                          <NavLink
                            to={setting.url}
                            style={{ fontFamily:"Gilroy-Medium", textDecoration:"none", color:"#2c3e50", backgroundColor:"#fff"}}
                          >
                          
                            {setting.display}
                          </NavLink>
                          </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                  <span>
                  <NavLink
                    to="/jobs"
                    style={{marginLeft:"20px", fontFamily:"Gilroy-Medium", textDecoration:"none", backgroundColor:"#fff"}}
                  >
                     Jobs
                   
                  </NavLink>
                  </span>
                  <span>
                  <NavLink
                    to="/assessments"
                    style={{marginLeft:"20px", fontFamily:"Gilroy-Medium", textDecoration:"none", backgroundColor:"#fff"}}
                  >
                     Assessments
                   
                  </NavLink>
                  </span>
                </li>
              </ul>
            </div>

            <div className="nav__right">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src= {Ellipse}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {profileArray.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} style={{textAlign:"left"}}>
                     <Typography textAlign="center">
                          <NavLink
                            to={setting.url}
                            style={{ fontFamily:"Gilroy-Medium", textDecoration:"none", color:"#2c3e50", backgroundColor:"#fff"}}
                          >
                            {setting.display}
                          </NavLink>
                        </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
