import React from "react";
import "./ProfileMainDash.css";
// import ProfileSideBar from "./ProfileSideBar"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const ProfileMainDash = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="ProfileMainDash">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="About Me"
              {...a11yProps(0)}
              style={{
                fontFamily: "Gilroy-SemiBold",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Education"
              {...a11yProps(1)}
              style={{
                fontFamily: "Gilroy-SemiBold",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Resume"
              {...a11yProps(2)}
              style={{
                fontFamily: "Gilroy-SemiBold",
                textTransform: "capitalize",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box>
            <div className="top">
              <div className="details">
                <h1 style={{ fontFamily: "Gilroy-Medium" }}>Muskan Singh</h1>
                <h5>Studying in IIM Mumbai</h5>
              </div>
              <div className="pic">
                <img
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div className="bottom">
              <Grid item lg={6}>
                <div className="project-heading">
                  <h5
                    style={{
                      fontFamily: "Gilroy-Medium",
                      marginTop: "30px",
                      marginLeft: "30px",
                    }}
                  >
                    Personal Information
                  </h5>
                  <Box px={1}>
                    <Tooltip title="Edit Project" placement="top">
                      <EditTwoToneIcon />
                    </Tooltip>
                  </Box>
                </div>

                <ul className="info">
                  <li>
                    <strong>First Name: </strong>
                    <span>Muskan</span>
                  </li>
                  <li>
                    <strong>Last Name: </strong> <span>Singh</span>
                  </li>
                  <li>
                    <strong>Mobile Number:</strong> <span>9304697777</span>
                  </li>
                  <li>
                    <strong> Email Address </strong>
                    <span> muskan12@gmail.com </span>
                  </li>
                  <li>
                    <strong>About Me </strong>
                    <span>
                      {" "}
                      Node JS has ordered Apple smart watch, samsung Gear 2500mh
                      battery.
                    </span>
                  </li>

                  <li>
                    <strong>Address</strong>
                    <span>
                      {" "}
                      Kormagla, Bengaluru
                    </span>
                  </li>
                </ul>
              </Grid>
            </div>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box>
            <div className="top">
              <div className="details">
                <h1 style={{ fontFamily: "Gilroy-Medium" }}>Education Qualification</h1>
              </div>
              <div className="pic">
                <img
                  src="https://www.freeiconspng.com/thumbs/education-png/education-png-3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bottom">
              <Grid item lg={6}>
                <div className="project-heading">
                  <h5
                    style={{
                      fontFamily: "Gilroy-Medium",
                      marginTop: "30px",
                      marginLeft: "30px",
                    }}
                  >
                    Graduation
                  </h5>
                  <Box px={1}>
                    <Tooltip title="Edit Project" placement="top">
                      <EditTwoToneIcon />
                    </Tooltip>
                  </Box>
                </div>

                <ul className="info">
                  <li>
                    <strong>College Name: </strong>
                    <span>Rajiv Gandhi Vishwavidyalay</span>
                  </li>
                  <li>
                    <strong>University </strong> <span>Vinobha Bhave</span>
                  </li>
                  <li>
                    <strong>CGPA</strong> <span>9.0</span>
                  </li>
                  <h5
                    style={{
                      fontFamily: "Gilroy-Medium",
                      marginTop: "30px",
                    }}
                  >
                    Higher Secondory Education
                  </h5>
                  <li>
                    <strong>College Name: </strong>
                    <span>Rajiv Gandhi Vishwavidyalay</span>
                  </li>
                  <li>
                    <strong>University </strong> <span>Vinobha Bhave</span>
                  </li>
                  <li>
                    <strong>CGPA</strong> <span>9.0</span>
                  </li>
                </ul>
              </Grid>
            </div>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Resume not uploaded Yet.

          <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"400px"}}>
            <div style={{textAlign:"center"}}>
            <DriveFolderUploadIcon/>
           
            <p style={{textAlign:"center", marginTop:"20px"}}>Drag your files here or click in this area.</p>

            </div>
           
        </div>
        </TabPanel>
      </Box>

      {/* <div className="top">
            <div className="details">
            <h1>Muskan Singh</h1>
            <h5>Studying in IIM Mumbai</h5>
            </div>
            <div className="pic">
                <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           
        </div> */}
      {/* <div className="profileDashboard">
        <ProfileSideBar/>
         <div className="profileInfo"></div>
        </div> */}
    </div>
  );
};

export default ProfileMainDash;
