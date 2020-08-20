import React from "react";
import classes from "./messages-list.module.scss";
import Message from "../Message/Message";

export default function MessagesList({ chatData }) {
  const currentChatData = chatData.filter(item => item.id === "work")[0] || {};
  const messages = currentChatData.messages || [];
  console.log(messages)
  return (
    <ul className={classes.MessagesList}>
      {
        messages.map(({sender, text, time }) => (
          <Message
            key={sender + time}
            sender={sender}
            text={text}
            time={time}
          />
        ))
      }
    </ul>
  )
}