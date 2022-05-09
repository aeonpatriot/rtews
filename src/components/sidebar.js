import "../css/App.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <li className="sidebar-header">
          {" "}
          <div id="icon">
            <AccountCircleIcon />
          </div>{" "}
          <div id="title">Admin</div>
        </li>
        <div>
          <hr className="sidebar-divider"></hr>
        </div>
        {sidebarData.map((val, key) => {
          return (
            <NavLink to={val.link} className="sidebar-row" key={key}>
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
