import React from "react";
import "../App.css";
import { sidebarData } from "./sidebarData";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {sidebarData.map((val, key) => {
          if (val.type === "divider") {
            return (
              <div><hr className="sidebar-divider"></hr></div>
            );
          } else if (val.type === "header") {
            return (
              <li
                className="sidebar-header"
                key={key}
              >
                {" "}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          } else {
            return (
              <li
                className="sidebar-row"
                id={window.location.pathname === val.link ? "active" : ""}
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                {" "}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
