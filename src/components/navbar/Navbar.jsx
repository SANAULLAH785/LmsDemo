import React, { useCallback, useState } from "react";
import "./Navbar.css";
import logo1 from "../../assets/logo1.png";
// import icon1 from "../../assets/Vector.png";
// import avatar from '../../assets/placeholder.jpg'
import RightNav from "../rightnav/RightNav";


const Navbar = ({toggleSidebar}) => {
//   const [toggle,setToggle]=useState(false)
//  const handleClick=()=>{
//   setToggle(!toggle)
//   // alert(toggle)
//  }
  return (
    <>
    <div className="nav-container">
      <div className="left-nav">
        <div className="logos">
          <div className="logo1">
            <img src={logo1} alt="Urqa" />
          </div>
          <div className="logo2">
          <i className="bi bi-list logo2-icon"  onClick={toggleSidebar}></i>
          </div>
        </div>
        <div className="navSearch">
        <div className="search-container">
    <input type="text" className="search-input" placeholder="Search here"/>
    <i className="bi bi-search search-icon"></i>
  </div>
        </div>
      </div>
    <RightNav/>
    </div>
    </>
  );
};

export default Navbar;
