import React, { useState, useEffect } from 'react';
import avatar from '../../assets/placeholder.jpg';
import '../navbar/Navbar.css';

import Notification from '../notification/Notification';
import Messages from '../message/Messages';
import Avatar from '../avatar/Avatar';
// import Avatar from '../avatar/Avatar';

// export const allNoty = [
//   { id: 1, img:{avatar}, name: 'John Doe', title: 'Notification 1', text: 'Temporary text for Notification 1, Lorem ipsum dolor sit amet.' },
//   { id: 2, img:{avatar}, name: 'Jane Doe', title: 'Notification 2', text: 'Temporary text for Notification 2, consectetur adipiscing elit.' },
//   { id: 3, img:{avatar}, name: 'Bob Smith', title: 'Notification 3', text: 'Temporary text for Notification 3, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//   { id: 4, img:{avatar}, name: 'Alice Johnson', title: 'Notification 4', text: 'Temporary text for Notification 4, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
//   { id: 5, img:{avatar}, name: 'Chris Williams', title: 'Notification 5', text: 'Temporary text for Notification 5, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
//   { id: 6, img:{avatar}, name: 'Eva Martinez', title: 'Notification 6', text: 'Temporary text for Notification 6, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
//   { id: 7, img:{avatar}, name: 'David Brown', title: 'Notification 7', text: 'Temporary text for Notification 7, ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
//   { id: 8, img:{avatar}, name: 'Grace Wilson', title: 'Notification 8', text: 'Temporary text for Notification 8, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
//   { id: 9, img:{avatar}, name: 'Mike Thompson', title: 'Notification 9', text: 'Temporary text for Notification 9, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
//   { id: 10, img: {avatar}, name: 'Olivia Taylor', title: 'Notification 10', text: 'Temporary text for Notification 10, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
// ];


const RightNav = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);


  const [notificationCount, setNotificationCount] = useState(5);
  const [messagesCount, setMessagesCount] = useState(5);



  const handleNotificationClick = () => {
    setShowMessages(false)
    setShowNotification(!showNotification);

    setNotificationCount(0)
  };
  const handleMessage=()=>{
    setShowNotification(false)
    setShowAvatar(false)
    setShowMessages(!showMessages)
    setMessagesCount(0)

  }

  const handleAvatar=()=>{
    setShowNotification(false)
    setShowMessages(false)

    setShowAvatar(!showAvatar)
    console.log(showAvatar)
  }
  


  return (
    <div>
      <div className="right-nav">
        <div>
          <i
            className="bi bi-chat-left-dots"  //ya messages ka icon ha
            style={{ padding: '10px', color: '#218C75', width: '28px' }}
            onClick={handleNotificationClick}
          ></i>
          <div className="notification-icon">
            {notificationCount > 9 ? '9+' : notificationCount}
          </div>
        </div>
        <div>
          <i
            className="bi bi-bell" onClick={handleMessage} //notification icon 
            style={{ padding: '10px', color: '#218C75', width: '28px' }}
          ></i>
          <div className="notification-icon">
            {messagesCount > 9 ? '9+' : messagesCount}
          </div>
        </div>
     
        <p>Hello Amir</p>
      
        <div className="avatar" >
          <img src={avatar} alt="Avatar" onClick={handleAvatar} />
          {showAvatar?<Avatar />:""} 
        </div>
      </div>
        {showNotification ? <Notification  />:""}   
        {showMessages ? <Messages />:""}    

    </div>
  );
};

export default RightNav;
