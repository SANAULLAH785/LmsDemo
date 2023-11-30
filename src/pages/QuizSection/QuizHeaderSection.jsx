import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./QuizHeaderSection.css";
import CreateQuestion from "../QuestionSection/CreateQuestion";

const QuizHeaderSection = () => {
  console.log('quiz component')
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const HandleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="parent">
        <Navbar Togglesidebar={HandleToggleSidebar}></Navbar>

        <div
          className="sidebardiv1"
          style={{ display: "flex", flexWrap: "no-wrap", width: "100%" }}
        >
          <div className="sidebar-wrapper">
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>

          <div style={{ width: "100%", backgroundColor: "", margin: "10px" }}>
            <h4> Quiz Header section</h4>
            <CreateQuestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizHeaderSection;
