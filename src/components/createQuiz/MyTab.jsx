import { Collapse } from 'antd';
import  { useState } from 'react';

const { Panel } = Collapse;

const MyTab = ({value,setContent}) => {
  // const [selectedOption, setSelectedOption] = useState(null);

const handleRadioChange=(event)=>{
  console.log(event.target.value)
  setContent(
    (prevState) => ({ ...prevState, quizType:event.target.value })
  )
}
  return (
    <div>
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Quiz Type :" key="1">
          <label>
            <input
              type="radio"
              value="practice"
              name='radio'
              checked={value.quizType === 'practice' }
              onChange={handleRadioChange}
            />
            <span style={{ margin: 10 }}>Practice Quiz</span>
          </label>
          <label>
            <input
              type="radio"
              value="grade"
              name='radio'

              checked={value.quizType === 'grade'}
              onChange={handleRadioChange}
            />
            <span style={{ margin: 10 }}>Grade Quiz</span>
          </label>
        </Panel>
      </Collapse>
    </div>
  );
};

export default MyTab;
