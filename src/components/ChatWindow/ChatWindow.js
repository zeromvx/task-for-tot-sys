import React from "react";
import classes from "./chat-window.module.scss";
import SendMessageForm from "../SendMessageForm/SendMessageForm";

export default function ChatWindow() {
  return (
    <main className={classes.ChatWindow}>

      <SendMessageForm />
    </main>
  )
}