import React from "react";
import classes from "./drawer.module.scss";
import ChatPicker from "../ChatPicker/ChatPicker";

export default function Drawer({ chatData }) {

  return (
    <aside className={classes.Drawer}>
      <ul>
        {
          chatData.map(({ id, title, logo } ) => (
           <ChatPicker
             key={id}
             title={title}
             logo={logo}
           />
          ))
        }
      </ul>
    </aside>
  )
}