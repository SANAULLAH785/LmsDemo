import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const FillInBlanks = ({ onAddBlank, onUpdateQuestion, questionIndex }) => {
  const [blankstatement, setBlankstatement] = useState("");
  const [selectedChunks, setSelectedChunks] = useState([]);
  const [originalChunks, setOriginalChunks] = useState([]);
  const [chunks, setChunks] = useState([]);
  console.log("fill in blanks component");

  useEffect(() => {
    UpdateQuestion();
  }, [blankstatement, chunks, selectedChunks]);

  const UpdateQuestion = () => {
    const newQuestion = {
      type: "Fill in blanks",
      contentoftruefalse: "",
      isTrue: true,
      options: [],
      correctIndex: [],
      contentofmcqs: "",
      mode: "",
      selectedQuestionType: "Fill in blanks",
      fillinblank: blankstatement,
      chunk: chunks,
    };
    onUpdateQuestion(newQuestion, questionIndex);
  };

  const HandelChunkClick = (index) => {
    
  const updatedarrayofchunks=[...chunks];
  const selectchunkindex=selectedChunks.indexOf(index);
  if(selectchunkindex===-1){
    updatedarrayofchunks[index]='-';
    setSelectedChunks([...selectedChunks,index])
  }else{
    updatedarrayofchunks[index]=originalChunks[index];
    const updatedselectedchunk=selectedChunks.filter((selectchunkindex)=>selectchunkindex!==index);
    setSelectedChunks(updatedselectedchunk);
  }
 setChunks(updatedarrayofchunks);

  };

  const HandleBlankChange = (e) => {
    setBlankstatement(e.target.value);
  };

  const HandelChunks = () => {
    const generatedchunks = blankstatement.split(" ");
    setOriginalChunks([...generatedchunks]); 
    setChunks([...generatedchunks]);
  };

  const HandleAddBlank = ({}) => {
  };

  const HandlemoreBlank = () => {
    onAddBlank("Fill in blanks");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        label="Write your statement here"
        value={blankstatement}
        onChange={HandleBlankChange}
      ></TextField>
      <Button
        style={{
          marginTop: "10px",
          backgroundColor: "#10baac",
          color: "black",
        }}
        onClick={HandelChunks}
      >
        Generates Fill IN the Blank Chunks
      </Button>

      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              marginRight: "30px",
            }}
            onClick={HandleAddBlank}
          >
            {" "}
            Click to Add Blank in this Statement
          </button>
        </div>
        {chunks.map((data, index) => (
          <span key={index} style={{ marginRight: "10px" }}>
            <span
              type="text "
              style={{ border: "none", cursor: "pointer" }}
              onClick={() => {
                HandelChunkClick(index);
              }}
            >
              {data}
            </span>
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
