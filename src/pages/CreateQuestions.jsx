import  { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
// import MakeQuestions from '../components/makeQuestions/MakeQuestions'
import QuestionOptions from '../components/questions/QuestionOptions'

const CreateQuestions = () => {
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
      {/* <div className="content"> */}
      {/* <MakeQuestions/> */}
      {/* </div> */}
    </div>
    </div>
  )
}

export default CreateQuestions