import React, { useState } from 'react';
import { Collapse } from 'antd';
import Option from './Option'; // Assuming both components are in the same directory

const { Panel } = Collapse;

const QuestionOptions = () => {
  const [question, setQuestion] = useState({
    statement: '',
    explanation: '',
    options: [{ number: 1, value: '', isCorrect: false,isIncorrect:true }],
  });

  const handleStatementChange = (event) => {
    setQuestion((prevQuestion) => ({ ...prevQuestion, statement: event.target.value }));
  };

  const handleExplanationChange = (event) => {
    setQuestion((prevQuestion) => ({ ...prevQuestion, explanation: event.target.value }));
  };

  const handleOptionChange = (optionNumber, event) => {
    const newOptions = [...question.options];
    const optionIndex = newOptions.findIndex((option) => option.number === optionNumber);
    newOptions[optionIndex].value = event.target.value;
    setQuestion((prevQuestion) => ({ ...prevQuestion, options: newOptions }));
  };

  const handleCorrectChange = (optionNumber) => {
    const newOptions = [...question.options];
    const optionIndex = newOptions.findIndex((option) => option.number === optionNumber);
    newOptions[optionIndex].isCorrect = !newOptions[optionIndex].isCorrect;
    setQuestion((prevQuestion) => ({ ...prevQuestion, options: newOptions }));
  };
  const handleInCorrectChange = (optionNumber) => {
    const newOptions = [...question.options];
    const optionIndex = newOptions.findIndex((option) => option.number === optionNumber);
    newOptions[optionIndex].isCorrect = !newOptions[optionIndex].isCorrect;
    setQuestion((prevQuestion) => ({ ...prevQuestion, options: newOptions }));
  };
  


  const handleAddOption = () => {
    const nextOptionNumber = question.options.length + 1;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: [...prevQuestion.options, { number: nextOptionNumber, value: '', isCorrect: false }],
    }));
  };
console.log("question State",question)
  return (
    <div>
      {/* <label>Question Statement:</label>
      <textarea value={question.statement} onChange={handleStatementChange} style={{color:"black"}} /> */}

      {/* <label>Explanation:</label>
      <textarea value={question.explanation} onChange={handleExplanationChange} /> */}

      {/* <label>Options:</label> */}
{question.options.map((option) => (
  <Option
    key={option.number}
    optionNumber={option.number}
    optionValue={option.value}
    isCorrect={option.isCorrect}
    onOptionChange={() => handleOptionChange(option.number)}
    onCorrectChange={() => handleCorrectChange(option.number)}
    isIncorrect={option.isIncorrect}
    onIncorrectChange={() => handleInCorrectChange(option.number)}
  />
))}
  <br />
      <span onClick={handleAddOption} style={{color:'#08496D'}}>+ More Options</span>
    </div>
  );
};

export default QuestionOptions;
