import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Banner from '../components/body/Banner'

const MyProducts = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="parent">
    <Navbar toggleSidebar={toggleSidebar} />
    <div style={{display:'flex',flexWrap:'no-wrap'}}>
      <div className="sidebar-weraper">
      <Sidebar  isSidebarOpen={isSidebarOpen}/>
      </div>
      <div className="content">
      <Banner/>
      </div>
    </div>
    </div>
  )
}

export default MyProducts