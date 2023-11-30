import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TrueFalse.css";

const TrueFalse = ({ onAddTrueFalse, questionIndex, onUpdateQuestion }) => {
  const [trueFalseStatement, setTrueFalseStatement] = useState("");
  const [isTruefalse, setIsTrue] = useState(true);
  useEffect(()=>{
    Updatequestion();

  },[isTruefalse,trueFalseStatement])
  const handleSetTrueFalse = (newValue) => {
    setIsTrue(newValue);
  };

  const HandleStatementChange = (e) => {
    setTrueFalseStatement(e.target.value);
  };

  const Updatequestion = () => {
    const newQuestion = {
      type: "True/False",
      contentoftruefalse: trueFalseStatement,
      isTrue: isTruefalse,
      options: [],
      correctIndex: [],
      contentofmcqs: "",
      mode: "",
      selectedQuestionType: "True/False",
    };
    onUpdateQuestion(newQuestion, questionIndex);
  };

  const handleAddTrueFalse = () => {
    onAddTrueFalse("True/False");
  };

  return (
    <div>
      <Box style={{ marginTop: "20px" }}>
        <TextField
          label="Write your statement here"
          value={trueFalseStatement}
          onChange={HandleStatementChange}
        />
        <div style={{ display: "flex", marginTop: "4px" }}>
          <p style={{ marginTop: "10px", justifyContent: "center" }}>Set As</p>
          <Button
            className={`truebtn ${isTruefalse ? "active" : ""}`}
            onClick={() => handleSetTrueFalse(true)}
            style={{
              marginLeft: "10px",
              color: "black",
              marginTop: "4px",
              backgroundColor: isTruefalse ? "#10baac" : "",
            }}
          >
            True
          </Button>
          <Button
            className={`falsebtn ${!isTruefalse ? "active" : ""}`}
            onClick={() => handleSetTrueFalse(false)}
            style={{
              marginLeft: "10px",
              color: "black",
              marginTop: "4px",
              backgroundColor: !isTruefalse ? "#10baac" : "",
            }}
          >
            False
          </Button>
        </div>
      </Box>

      <button className="questionbuttonmcq" onClick={handleAddTrueFalse}>
        Add more True/False
      </button>
    </div>
  );
};

export default TrueFalse;
