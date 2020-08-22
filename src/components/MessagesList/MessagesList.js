import React from "react";
import classes from "./messages-list.module.scss";
import Message from "../Message/Message";
import {useMessages} from "../../hooks/useMessages";

const MessagesList = () => {
  const {messages} = useMessages();

  return (
    <ul className={classes.MessagesList}>
      {
        messages && messages.map(({sender, id, text, time}, index) => (
          <Message
            key={sender + time + index}
            messageID={id}
            sender={sender}
            text={text}
            time={time}
          />
        ))
      }
    </ul>
  )
}

export default MessagesList;