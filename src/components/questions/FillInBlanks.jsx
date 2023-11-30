import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const FillInBlanks = ({onAddBlank,onUpdateQuestion,questionIndex}) => {
  const [blankstatement, setBlankstatement] = useState("");
  const [chunks, setChunks] = useState([]);
  console.log('fill in blanks component')
  useEffect(()=>{
    UpdateQuestion();
  },[blankstatement,chunks])
  const UpdateQuestion=()=>{
    const newQuestion={
      type: "Fill in blanks",
      contentoftruefalse: "",
      isTrue: true,
      options: [],
      correctIndex: [],
      contentofmcqs: "",
      mode: "",
      selectedQuestionType: "Fill in blanks",
      fillinblank:blankstatement,
      chunk:chunks
    }
    onUpdateQuestion(newQuestion,questionIndex )
  }
  const HandleBlankChange = (e) => {
    setBlankstatement(e.target.value);
  };
  const HandelChunks = () => {
    const generatedchunks = blankstatement.split(" ");
    console.log(generatedchunks);
    setChunks(generatedchunks);
  };
  const HandleAddBlank=({})=>{

  }
  const HandlemoreBlank=()=>{
    onAddBlank(
       "Fill in blanks"
   )
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        label="Write your statement here"
        value={blankstatement}
        onChange={HandleBlankChange}
      ></TextField>
      <Button
        style={{ marginTop: "10px", backgroundColor: "#10baac", color: "black" }}
        onClick={HandelChunks}
      >
        Generates Fill IN the Blank Chunks
      </Button>

   
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <div >
          <button style={{ border:'none',backgroundColor:'transparent',marginRight:'30px'}} onClick={HandleAddBlank}> Click to Add Blank in this Statement</button>
        </div>
        {chunks.map((data, index) => (
          <span key={index} style={{ marginRight: "10px" }}>
            <span type="text " style={{border:'none'}} 
            onClick={()=>{
              const updatedchunks=[...chunks];
              updatedchunks[index]='---';
              setChunks(updatedchunks);
            }}
            >{data}</span>
            </span>
        ))}
      </div>
      <button className="questionbuttonmcq" onClick={HandlemoreBlank}>
        Add more Blanks
      </button>
    </div>
  );
};

export default FillInBlanks;
