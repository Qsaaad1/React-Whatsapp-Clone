import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material'
import "./SidebarChat.css"

function SidebarChat({addNewChat}) {

  const [seed,setseed] = useState ('');

  const createChat = () => {
    const roomName = prompt ('Enter chat name');

    if (roomName) {
      // We come here later when we learn the Database
    }
  }

  useEffect(() => {
    setseed(Math.floor( Math.random() * 5000) )
  }, [])

  return !addNewChat ?  (
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className='sidebarChat_info'>
            <h2>Quandale Dingle</h2>
            <p>Wanna play fortnite? 🧔🏻‍♀️</p>
        </div>
        
    </div>
  ):(
    <div onClick={createChat} className="sidebarChat">
        <h2>Create new Chat</h2>
    </div>
  );
}

export default SidebarChat