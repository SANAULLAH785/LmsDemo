import React from "react";
import "./Banner.css";
import course from "../../assets/courses.svg";
import course1 from "../../assets/course1.svg";
import frame from "../../assets/frame.svg";
import group from "../../assets/group.svg";
import group1 from "../../assets/group1.svg";
import flash from "../../assets/flash.svg";

// import circle1 from "../../assets/circle1.svg";

import finger from "../../assets/finger.svg";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="banContainer">
      <h1 style={{ paddingBottom: "2rem" }}>My products</h1>
      {/* wrapper1 */}
      <div className="wrapper  wrapper1">
        <div>
          <img
            src={course}
            alt="courses"
            className="banrImgSize"
            style={{ margin: "10px" }}
          />
        </div>
        <div className="courses">
          <img src={course1} alt="" className="banrImgSize" />
          <p className="text-stroke">COURSES</p>
        </div>
      </div>
      {/* wrapper2 */}
      <div className="wrapper wrapper2" style={{ marginTop: "2rem" ,backgroundColor: '#0F745E'}}>
        <div className="quiz">
          <Link to='/createquiz' className="text-stroke">Quiz</Link>
          <img src={finger} alt="" className="banrImgSize"  style={{marginLeft:'20px'}} />
        </div>  
        <div>
          <img src={group} alt="" className="banrImgSize" style={{opacity:'0.2'}}/>
        </div>
      </div>
      {/* wrapper3 */}
      <div className="wrapper" style={{ marginTop: "2rem", backgroundColor:' #095A49',width:'100%'}}>
        <div>
          <img src={group1} alt=""  className="banrImgSize" style={{opacity:'0.2'}} />
        </div>
        <div className="courses flashCard" style={{width:'70%'}}>
          <img src={flash} alt="" className="banrImgSize"    style={{marginRight:'20px'}}/>
          <p className="text-stroke"  style={{marginRight:'20px'}}>Flash Card</p>
        </div>
      </div>
      {/* wrapper4 */}
      <div className="wrapper " style={{ marginTop: "2rem",backgroundColor:'#0F745E', paddingLeft:'2rem', paddingRight:'2rem' }}>
        <div className="assignments">
          <p className="text-stroke" style={{}}>ASSIGNMENTS</p>
          <img src={finger} alt=""  className="banrImgSize"/>
        </div>
        <div>
        <img src={group} alt="" className="banrImgSize" style={{opacity:'0.2'}}/>

        </div>
      </div>
      {/* <div className="wrapper" style={{ marginTop: "2rem" }}></div> */}
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Banner;
