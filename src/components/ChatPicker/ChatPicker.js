import React from "react";
import classes from "./chat-picker.module.scss";

export default function ChatPicker({ id, title, logo }) {
  return (
    <li className={classes.ChatPicker}>
      <img src={logo} alt="chatLogo" className={classes.chatLogo}/>
      <div>
        {title}
      </div>
    </li>
  )
}