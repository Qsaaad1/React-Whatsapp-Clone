import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search" type="text"/>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
