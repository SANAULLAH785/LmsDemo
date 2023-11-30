import React, { useEffect, useState } from "react";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import "./MultipleChoice.css";

const MultipleChoice = ({
  onAddMultipleChoice,
  onUpdateQuestion,
  questionIndex,
}) => {
  const [mcqsQuestions, setMcqsQuestions] = useState([]);
  const [questionStatement, setQuestionStatement] = useState("");
  const [options, setOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState([]);
  const [mode, setMode] = useState("singleselect");
  useEffect(() => {
    Updatequestion();
  }, [correctIndex,options,questionStatement]);
  const handleAddMoreOptions = () => {
    setOptions([...options, ""]);
    Updatequestion();
  };
  const HandleStatement = (e) => {
    setQuestionStatement(e.target.value);
  };
  const handleOptionStatementChange = (index, value) => {
    const UpdateoptionStatement = [...options];
    UpdateoptionStatement[index] = value;
    setOptions(UpdateoptionStatement);
  };
  const handleOptionDelete = (index) => {
    const updatedOptions = [...options];
    const updatedCorrectIndex = correctIndex.filter((i) => i !== index);
    updatedOptions.splice(index, 1);
    setCorrectIndex(updatedCorrectIndex);
    setOptions(updatedOptions);
  };
  const handleMenuChange = (index) => {
    console.log("index", index);
    if (mode === "multiselect") {
      setCorrectIndex((prevIndices) => {
        console.log("prevIndices", prevIndices);
        const indexExists = prevIndices.includes(index);
        console.log("indexexist", indexExists);
        if (indexExists) {
          return prevIndices.filter((i) => i !== index);
        } else {
          const correctIndex = [...prevIndices, index];
          console.log("Added index:", correctIndex);
          return correctIndex;
        }
      });
    } else {
      setCorrectIndex([index]);
    }
  };
  
  const handleButtonSelect = (newMod) => {
    setMode(newMod);
    setCorrectIndex([]);
    Updatequestion();
  };
  const Updatequestion = () => {
    const newQuestion = {
      type: "Multiple Choice Questions",
      contentoftruefalse: "",
      isTrue: true,
      options: options,
      correctIndex: correctIndex,
      contentofmcqs: questionStatement,
      mode: mode,
      selectedQuestionType: "Multiple Choice Questions",
    };
    onUpdateQuestion(newQuestion, questionIndex);
  };
  const handleAddQuestion = () => {
    onAddMultipleChoice(  "Multiple Choice Questions" );
  };
  return (
    <>
      <Box style={{ marginTop: "20px" }}>
        <TextField
          label="Write your statement here"
          value={questionStatement}
          onChange={HandleStatement}
        ></TextField>
        <div style={{ marginTop: "5px" }}>
          <button
            className={`multibtn ${mode === "multiselect" ? "active" : ""}`}
            onClick={() => handleButtonSelect("multiselect")}
          >
            Multi Select
          </button>
          <button
            className={`singlebtn ${mode === "singleselect" ? "active" : ""}`}
            onClick={() => handleButtonSelect("singleselect")}
          >
            Single Select
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                gap: "20px",
              }}
            >
              <p className="optionnum">{index + 1}</p>
              <TextField
                style={{ width: "46%" }}
                type="text"
                value={option}
                onChange={(e) => handleOptionStatementChange(index, e.target.value)}
              />
              <Select
                style={{ width: "16%" }}
                value={
                  mode === "multiselect" && correctIndex.includes(index)
                    ? "Correct"
                    : mode === "singleselect" && correctIndex[0] === index
                    ? "Correct"
                    : "InCorrect"
                }
                onChange={() => handleMenuChange(index)}
              >
                <MenuItem value={"Correct"}>Correct</MenuItem>
                <MenuItem value={"InCorrect"}>Incorrect</MenuItem>
              </Select>

              <Button
                onClick={() => handleOptionDelete(index)}
                style={{ backgroundColor: "#F04B61", color: "black" }}
              >
                Delete
              </Button>
            </div>
          ))}
          <button className="addoption" onClick={handleAddMoreOptions}>
            {options.length === 0 ? "Add Option" : "+More Option"}
          </button>
        </div>
      </Box>
      {mcqsQuestions.map((question, index) => (
        <div key={index}>
          <Box style={{ marginTop: "20px" }}>
            <TextField
              label="Write your statement here"
              value={question.statement}
            ></TextField>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    gap: "20px",
                  }}
                >
                  <p className="optionnum">{optionIndex + 1}</p>
                  <TextField
                    style={{ width: "46%" }}
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(index, optionIndex, e.target.value)
                    }
                  />
                  <Select
                    style={{ width: "16%" }}
                    value={
                      mode === "multiselect" &&
                      correctIndex.includes(optionIndex)
                        ? "Correct"
                        : mode === "singleselect" &&
                          correctIndex[0] === optionIndex
                        ? "Correct"
                        : "InCorrect"
                    }
                    onChange={() => handleMenuChange(index, optionIndex)}
                  >
                    <MenuItem value={"Correct"}>Correct</MenuItem>
                    <MenuItem value={"InCorrect"}>Incorrect</MenuItem>
                  </Select>

                  <Button
                    onClick={() => handleOptionDelete(index, optionIndex)}
                    style={{ backgroundColor: "#F04B61", color: "black" }}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </Box>
        </div>
      ))}

      <button className="questionbuttonmcq" onClick={handleAddQuestion}>
        Add more MCQs
      </button>
    </>
  );
};

export default MultipleChoice;
