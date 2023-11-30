import React, { useEffect, useState } from "react";
import "./CreateQuestion.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TrueFalse from "../../components/questions/TrueFalse";
import MultipleChoice from "../../components/questions/MultipleChoice";
import FillInBlanks from "../../components/questions/FillInBlanks";

const CreateQuestion = () => {
  console.log(' create question component')
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "",
      contentoftruefalse: "",
      isTrue: true,
      options: [],
      correctIndex: [],
      contentofmcqs: "",
      mode: "",
      selectedQuestionType: "",
      fillinblank:""

    },
  ]);

  const HandleOptionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].type = event.target.value;
    updatedQuestions[index].selectedQuestionType = event.target.value;
    setQuestions(updatedQuestions);
    console.log('upd', updatedQuestions);
  };
 const updatedQuestions=(content,index)=>{
  setQuestions((prevQuestions) => {
    const updatedQuestion = { ...prevQuestions[index], ...content };
    const newQuestions = [...prevQuestions];
    newQuestions[index] = updatedQuestion;
    return newQuestions;
  });
 }
  const AddQuestion = (content) => {

    let newQuestion = {
      id: questions.length + 1,
      type: content??"",
      contentoftruefalse: "",
      isTrue: true,
      options: [],
      correctIndex: [],
      contentofmcqs: "",
      mode: "",
      fillinblank:"",
      selectedQuestionType: "",
      chunk:[]
    };

    if (content && content.type) {
      console.log(content.type)
      newQuestion = { ...newQuestion, ...content };
    }

    setQuestions([...questions, newQuestion]);
  };

  useEffect(() => {
    console.log('questions', questions);
  }, [questions]);

  const renderQuestionComponent = () => {
    return questions.map((question, index) => (
      <div key={question.id} >
        <Box className="selectquestion">
          <FormControl>
            <InputLabel id={`label-${index}`}>Select Question Type</InputLabel>
            <Select
              labelId={`label-${index}`}
              id={`selector-${index}`}
              label="Select Question Type"
              fullWidth
              value={question.selectedQuestionType}
              onChange={(event) => HandleOptionChange(event, index)}
            >
              <MenuItem value={"True/False"}>True/False</MenuItem>
              <MenuItem value={"Multiple Choice Questions"}>
                Multiple Choice Questions
              </MenuItem>
              <MenuItem value={"Fill in blanks"}>Fill in blanks</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {question.type === "Multiple Choice Questions" && (
          <MultipleChoice
          questionIndex={index}
          onUpdateQuestion={(content)=>{updatedQuestions(content ,index)}}
            onAddMultipleChoice={(content) =>
              AddQuestion(content)
            }
          />
        )}
        {question.type === "True/False" && (
          <TrueFalse
          questionIndex={index}
            onAddTrueFalse={(content) => AddQuestion(content)}
            onUpdateQuestion={(content)=>updatedQuestions(content,index)}

          />
        )}
        {question.type==="Fill in blanks" &&(
          <FillInBlanks
          
          questionIndex={index}
            onAddBlank={(content) => AddQuestion(content)}
            onUpdateQuestion={(content)=>updatedQuestions(content,index)}
          ></FillInBlanks>
        )}
      </div>
    ));
  };

  return (
    <div className="questionsection">
      <h4>Create Quiz</h4>
       
        {/* <Box className="selectquestion">
          <FormControl>
            <InputLabel id="label">Select Question Type</InputLabel>
            <Select
              labelId="label"
              id="selector"
              label="Select Question Type"
              fullWidth
              value={selectedQuestionType}
              onChange={(event) => HandleOptionChange(event, questions.length - 1)}
            >
              <MenuItem value={"True/False"}>True/False</MenuItem>
              <MenuItem value={"Multiple Choice Questions"}>
                Multiple Choice Questions
              </MenuItem>
              <MenuItem value={"Fill in blanks"}>Fill in blanks</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
    
      {renderQuestionComponent()}

      <button className="questionbutton" onClick={() => AddQuestion()}>
        + Add other type Questions
      </button>

      <div className="buttonsection">
        <button className="btn3">Save & Publish</button>
        <button className="btn2"> Save as Draft</button>
        <button className="btn1">Cancel</button>
      </div>
    </div>
  );
};

export default CreateQuestion;
