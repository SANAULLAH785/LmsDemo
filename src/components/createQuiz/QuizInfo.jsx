import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MainFram.css";
import RichText from "./RichText";
import MyTab from "./MyTab";
import CheckBox1 from "./CheckBox1";
import CheckBox2 from "./CheckBox2";
import CheckBox3 from "./CheckBox3";
import { fetchContent, getContent } from "../../store/createQuizSlice";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";

export default function QuizInfo() {
  const [content, setContent] = useState({
    richText: "",
    quizType: "",
    isShuffleAnswers: false,
    iSseeStudentResponse: false,
    isAlloMultipleAtemmpt: false,
    isShowOneQuestion: false,
    isTimeLimit: false,
    isShuffleQuestion: false,
    accesscode: false,
    ipAddress: false,
    assignToEveryOne: false,
    createGroup: false,
  });
  // const dispatch=useDispatch()

  // useEffect(() => {
  //   dispatch(fetchContent(content));

  // }, [dispatch]);
  // const postData=()=>{
  //   dispatch(fetchContent(content));
  //   dispatch(getContent());

  // }

  // const {contents} = useSelector((state) => state.content);
  // console.log(contents)

  // const richTextChange=(value)=>{
  //   setContent(prevContent=>(
  //     {
  //       ...prevContent,
  //       value
  //     }
  //   ))
  // }
  // useEffect(()=>{
  //   console.log(content)
  // },[content])
  return (
    <>
      {/* breadcrumb */}
      <BreadCrumbs />
      <div className="quizinfomain">
        <div className="divup">
          <p style={{ marginTop: "15px", marginLeft: "18px" }}>
            <a href="/">Dashboard</a> /<a href="/my-accounts">My Accounts</a> /
            <span style={{ color: "#000000" }}>
              <a href="/">Create Quiz</a>{" "}
            </span>
          </p>
          <div className="divup2">
            <h3>Create A Quiz</h3>
          </div>
        </div>

        <div className="startTab">
          <button className="btnsave">Detail</button>
          <button className=" btnreset">Question</button>
        </div>
        <div className="richtextDIV">
          <RichText content={content} setContent={setContent} />
        </div>
        <div className="inputdiv">
          <p style={{ marginBottom: "10px" }}>Quiz Type:</p>

          <MyTab value={content} setContent={setContent} />
        </div>

        <div className="assignmnt1">
          <CheckBox1 content={content} setContent={setContent} />
        </div>
        <div className="assignmnt">
          <CheckBox2 content={content} setContent={setContent} />
        </div>
        <div className="assignmnt">
          <CheckBox3 content={content} setContent={setContent} />
        </div>

        {/* end tab */}
        <div className="endTab">
          {/* <Link to='/createquiz/createquestions' className="btnsave" onClick={postData}>Save & Continue</Link> */}
          <button className=" btnreset" type="reset">
            Reset All
          </button>
        </div>
      </div>
    </>
  );
}
