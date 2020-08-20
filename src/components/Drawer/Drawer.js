import React from "react";
import classes from "./drawer.module.scss";
import ChatPicker from "../ChatPicker/ChatPicker";

const CHATS = [
  {
    id: "work",
    title: "Работа",
    logo: "https://image.flaticon.com/icons/svg/912/912316.svg"
  },
  {
    id: "communication",
    title: "Общение",
    logo: "https://image.flaticon.com/icons/svg/809/809522.svg"
  }
]

export default function Drawer() {
  return (
    <aside className={classes.Drawer}>
      <ul>
        {
          CHATS.map(({ id, title, logo } ) => (
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