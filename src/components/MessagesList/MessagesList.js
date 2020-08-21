import React from "react";
import classes from "./messages-list.module.scss";
import Message from "../Message/Message";
import PropTypes from "prop-types";
import {useParams} from "react-router";

const MessagesList = ({chatData, setChatData}) => {
  const {chatID} = useParams();

  const currentChatData = chatData.filter(item => item.id === chatID)[0];
  let {messages} = currentChatData || [];

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
            chatData={chatData}
            setChatData={setChatData}
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