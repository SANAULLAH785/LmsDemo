import { Collapse, Checkbox } from 'antd';
import React, { useState } from 'react';

const { Panel } = Collapse;


const CheckBox3 = ({content,setContent}) => {
  

  return (
    <div>
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Quiz Ristriction" key="1">
          <div className="checkbox1">
            <Checkbox checked={content.assignToEveryOne === true}  
             onChange={() => setContent((preState) => ({ ...preState, assignToEveryOne: !preState.assignToEveryOne }))}>
            Assign To Everyone
            </Checkbox>
            <Checkbox checked={content.createGroup === true}  
             onChange={() => setContent((preState) => ({ ...preState, createGroup: !preState.createGroup }))}>
            Create A Group
            </Checkbox>
         
          
          </div>
        
        </Panel>
       
      </Collapse>
    </div>
  );
};

export default CheckBox3;
