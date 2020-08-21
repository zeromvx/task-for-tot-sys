import React from "react";
import classes from "./messages-list.module.scss";
import Message from "../Message/Message";
import PropTypes from "prop-types";
import {useParams} from "react-router";

const MessagesList = ({chatData}) => {
  const { chatID } = useParams();

  const currentChatData = chatData.filter(item => item.id === chatID)[0];
  const { messages } = currentChatData || [];

  return (
    <ul className={classes.MessagesList}>
      {
        messages && messages.map(({sender, text, time}, index) => (
          <Message
            key={sender + time + index}
            sender={sender}
            text={text}
            time={time}
          />
        ))
      }
    </ul>
  )
}

MessagesList.propTypes = {
  chatData: PropTypes.array,
}

MessagesList.defaultProps = {
  chatData: [],
}

export default MessagesList;