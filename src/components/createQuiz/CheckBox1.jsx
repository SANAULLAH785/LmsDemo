import { Collapse, Checkbox } from 'antd';
// import  { useState } from 'react';

const { Panel } = Collapse;


const CheckBox1 = ({content,setContent}) => {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const onChange = (value) => {
    
  //   setSelectedOptions(value);
  // };

  return (
    <div>
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Assignment Group" key="1">
          <div className="checkbox1">
            <Checkbox  checked={content.isShuffleAnswers === true}  
             onChange={() => setContent((preState) => ({ ...preState, isShuffleAnswers: !preState.isShuffleAnswers }))}>
            Shuffle Answers
            </Checkbox>
            <Checkbox checked={content.iSseeStudentResponse === true}  
             onChange={() => setContent((preState) => ({ ...preState, iSseeStudentResponse: !preState.iSseeStudentResponse }))}>
            Lets student see their responses
            </Checkbox>
            <Checkbox checked={content.isAlloMultipleAtemmpt === true}  
             onChange={() => setContent((preState) => ({ ...preState, isAlloMultipleAtemmpt: !preState.isAlloMultipleAtemmpt }))}>
            Allow Multiple Attempts
            </Checkbox>
            <Checkbox checked={content.isShowOneQuestion === true}  
             onChange={() => setContent((preState) => ({ ...preState, isShowOneQuestion: !preState.isShowOneQuestion }))}>
            Show one question at a time
            </Checkbox>
          
          </div>
          <div>
            <Checkbox checked={content.isTimeLimit === true}  
             onChange={() => setContent((preState) => ({ ...preState, isTimeLimit: !preState.isTimeLimit }))}>
            Time Limit
            </Checkbox>
            {/* <Checkbox checked={content.iSseeStudentResponse === true}  
             onChange={() => setContent((preState) => ({ ...preState, iSseeStudentResponse: !preState.iSseeStudentResponse }))}>
            Minutes
            </Checkbox> */}
            <Checkbox checked={content.isShuffleQuestion === true}  
             onChange={() => setContent((preState) => ({ ...preState, isShuffleQuestion: !preState.isShuffleQuestion }))}>
            Shuffle Questions
            </Checkbox>
            </div>
        </Panel>
        {/* <Panel header="Additional Settings" key="2">
          <div className="checkbox1">
            <Checkbox onChange={() => onChange('timeLimit')}>Time Limit</Checkbox>
            <Checkbox onChange={() => onChange('shuffleAnswer')}>
              Shuffle Answer
            </Checkbox>
          </div>
        </Panel> */}
      </Collapse>
    </div>
  );
};

export default CheckBox1;
