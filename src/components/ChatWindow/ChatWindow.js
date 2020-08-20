import React from "react";
import classes from "./chat-window.module.scss";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import MessagesList from "../MessagesList/MessagesList";

export default function ChatWindow({ chatData }) {
  return (
    <main className={classes.ChatWindow}>
      <MessagesList chatData={chatData}/>
      <SendMessageForm chatData={chatData}/>
    </main>
  )
}