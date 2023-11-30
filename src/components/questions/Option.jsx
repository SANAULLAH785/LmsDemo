import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Option = ({
  optionNumber,
  optionValue,
  isCorrect,
  onOptionChange,
  onCorrectChange,
  isIncorrect,
  onIncorrectChange,
}) => {
  console.log(optionNumber, isCorrect, isIncorrect, onIncorrectChange);
  return (
    <div className="selectiondiv">
      <button
        style={{
          width: "5%",
          height: "43px",
          backgroundColor: "#10BAAC",
          marginleft: "",
          borderRadius: "4px",
          border:'none',
          fontSize:'16px'
        }}
      >
        {optionNumber}.
      </button>
      <input
        style={{
          width: "100%",
          height: "43px",
          color: "black",
          borderRadius: "4px",
          border: "1px gray",
          backgroundColor: "#EBEAED",
          outline: "none",
          fontSize: "16",
          fontWeight: "600",
          paddingLeft: "30px",
          // textAlign:'center'
        }}
        type="text"
        value={optionValue}
        onChange={(e) => onOptionChange(optionNumber, e)}
        placeholder="By Pressing Shift +K"
      />
     <div style={{ width: "21%", height: "8em" }}>
     <select style={{border:'1px solid #00A17180',outline:'none',borderRadius:'5px',width: '100%',height: '41px'}}>
              <option value="true">Incorrect</option>
              <option value="false">Correct</option>
            </select>
</div>


      <button
        style={{
          width: "7%",
          height: "43px",
          backgroundColor: "#F04B61",
          color: "white",
          marginLeft: "2px",
          borderRadius: "4px",
          border:'none',
          fontSize:'16px'
        }}
      >
        x
      </button>
    </div>
  );
};

export default Option;
