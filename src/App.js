import React from 'react';
import Home from "./Userpages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Usercomponents/Header/Header";
import Jobs from "./Userpages/Jobs";
import CourseWeb from "./Userpages/CourseWeb";
import CourseApp from "./Userpages/CourseApp";
import Dashboard from './Userpages/Dashboard';

import './App.css';
import Profile from './Userpages/Profile';



// import MyProfile from "./Userpages/MyProfile";
function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses">
          <Route path="web" element={<CourseWeb />} />
          <Route path="app" element={<CourseApp />} />
        </Route>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
       
      </Routes>
    </Router>
  );
}

export default App;
