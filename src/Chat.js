import { Avatar } from "@mui/material";
import "./Chat.css";
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [seed, setseed] = useState("");

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />

        <div className="chat_headerInfo">
          <h3>Juandale Pringle</h3>
          <p>online</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Jong Xina </span>
          my name is quandale
          <span className="chat_timestamp">5:06 am</span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
            <input type="text" placeholder="Type a Message" />
            <button  type="submit">Send</button>
        </form>
        <IconButton>
            <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
