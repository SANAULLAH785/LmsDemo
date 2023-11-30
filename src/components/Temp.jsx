import React, { useState } from 'react';

const CreateMCQs = () => {
  const [mcqs, setMCQs] = useState({
    statement: '',
    explanation: '',
    options: [''],
    correctOptions: [],
    incorrectOptions: [],
  });

  const handleStatementChange = (event) => {
    setMCQs((prevMCQs) => ({ ...prevMCQs, statement: event.target.value }));
  };

  const handleExplanationChange = (event) => {
    setMCQs((prevMCQs) => ({ ...prevMCQs, explanation: event.target.value }));
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...mcqs.options];
    newOptions[index] = event.target.value;
    setMCQs((prevMCQs) => ({ ...prevMCQs, options: newOptions }));
  };

  const handleCorrectOptionChange = (option) => {
    const newCorrectOptions = [...mcqs.correctOptions];
    const index = newCorrectOptions.indexOf(option);

    if (index === -1) {
      newCorrectOptions.push(option);
    } else {
      newCorrectOptions.splice(index, 1);
    }

    setMCQs((prevMCQs) => ({ ...prevMCQs, correctOptions: newCorrectOptions }));
  };

  const handleIncorrectOptionChange = (option) => {
    const newIncorrectOptions = [...mcqs.incorrectOptions];
    const index = newIncorrectOptions.indexOf(option);

    if (index === -1) {
      newIncorrectOptions.push(option);
    } else {
      newIncorrectOptions.splice(index, 1);
    }

    setMCQs((prevMCQs) => ({ ...prevMCQs, incorrectOptions: newIncorrectOptions }));
  };

  const handleAddOption = () => {
    setMCQs((prevMCQs) => ({ ...prevMCQs, options: [...prevMCQs.options, ''] }));
  };

  const handleSubmit = () => {
    // Yahaan aap apne backend server ko ya local storage ko update kar sakte hain.
    console.log('Submitted MCQs:', mcqs);
  };

  return (
    <div>
      <label>Question Statement:</label>
      <textarea value={mcqs.statement} onChange={handleStatementChange} />

      <label>Explanation:</label>
      <textarea value={mcqs.explanation} onChange={handleExplanationChange} />

      <label>Options:</label>
      {mcqs.options.map((option, index) => (
        <div key={index}>
          <input value={option} onChange={(event) => handleOptionChange(index, event)} placeholder={`Option ${index + 1}`} />
          <label>
            <input type="checkbox" checked={mcqs.correctOptions.includes(option)} onChange={() => handleCorrectOptionChange(option)} />
            Correct
          </label>
          <label>
            <input type="checkbox" checked={mcqs.incorrectOptions.includes(option)} onChange={() => handleIncorrectOptionChange(option)} />
            Incorrect
          </label>
        </div>
      ))}
      <button onClick={handleAddOption}>+ Add Option</button>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateMCQs;
