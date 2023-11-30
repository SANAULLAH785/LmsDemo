import { Collapse, Checkbox } from 'antd';
import React, { useState } from 'react';

const { Panel } = Collapse;


const CheckBox2 = ({setContent,content}) => {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const onChange = (value) => {
    
  //   setSelectedOptions(value);
  // };

  return (
    <div>
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Quiz Ristriction" key="1">
          <div className="checkbox1">
            <Checkbox 
             checked={content.accesscode === true}  
             onChange={() => setContent((preState) => ({ ...preState, accesscode: !preState.accesscode }))}

            >
            Require An Access Code
            </Checkbox>
            <Checkbox
            
            checked={content.ipAddress === true}  
            onChange={() => setContent((preState) => ({ ...preState, ipAddress: !preState.ipAddress }))}
            
             >
            Filter IP Address
            </Checkbox>
         
          
          </div>
        
        </Panel>
       
      </Collapse>
    </div>
  );
};

export default CheckBox2;