// Notification.jsx
import React, { useState } from 'react';
import './Messages.css'
import avatar from '../../assets/placeholder.jpg';



function Messages() {
  // const [showMsg,setShowMsg]=useState(false)
  // const handleClick=()=>{
  //   alert("details")


  // }


  const allNoty = [
    { id: 1, img:avatar, name: 'John Doe', title: 'Notification 1', text: 'Temporary text for Notification 1, Lorem ipsum dolor sit amet.' },
    { id: 2, img:avatar, name: 'Jane Doe', title: 'Notification 2', text: 'Temporary text for Notification 2, consectetur adipiscing elit.' },
    { id: 3, img:avatar, name: 'Bob Smith', title: 'Notification 3', text: 'Temporary text for Notification 3, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, img:avatar, name: 'Alice Johnson', title: 'Notification 4', text: 'Temporary text for Notification 4, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 5, img:avatar, name: 'Chris Williams', title: 'Notification 5', text: 'Temporary text for Notification 5, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 6, img:avatar, name: 'Eva Martinez', title: 'Notification 6', text: 'Temporary text for Notification 6, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 7, img:avatar, name: 'David Brown', title: 'Notification 7', text: 'Temporary text for Notification 7, ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 8, img:avatar, name: 'Grace Wilson', title: 'Notification 8', text: 'Temporary text for Notification 8, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 9, img:avatar, name: 'Mike Thompson', title: 'Notification 9', text: 'Temporary text for Notification 9, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 10, img: avatar, name: 'Olivia Taylor', title: 'Notification 10', text: 'Temporary text for Notification 10, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];
  
  const handleClick=(message)=>{

   alert(message.text)
    
  }
  return (
    <div className="notify1">
      <h3>Notification</h3>
      <hr />
      {allNoty.map((message, index) => (
        <li className='listStyle' key={index} onClick={()=>handleClick(message)} >
          <img src={message.img} alt={`Avatar of ${message.name}`} className="avatar" />
          <div>
            <h5>Name: {message.name}</h5>
            <h6>{message.title}</h6>
            <p>{message.text}</p>
          </div>
          <hr />
        </li>
      ))}
    </div>
  );
}

export default Messages;
