import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./message.module.scss";
import {useParams} from "react-router";
import {SENDED_MESSAGES} from "../../constants";

const Message = ({messageID, sender, text, time, chatData, setChatData}) => {
  const cls = [classes.Message];
  const {chatID} = useParams();
  const [isMessageEditing, setIsMessageEditing] = useState(false);

  if (sender !== "You") {
    cls.push(classes.MessageIn);
  } else {
    cls.push(classes.MessageOut);
  }

  const newChatData = [...chatData];
  const currentChatData = newChatData.filter(({id}) => id === chatID)[0];

  let sendedMessages = JSON.parse(localStorage.getItem(SENDED_MESSAGES));

  const deleteMessage = () => {
    sendedMessages = sendedMessages.filter(({id}) => id !== messageID);
    currentChatData.messages = currentChatData.messages.filter(({id}) => id !== messageID);

    localStorage.setItem(SENDED_MESSAGES, JSON.stringify(sendedMessages));
    setChatData(newChatData);
  }

  const editMessage = (e) => {

    if (e.key === "Enter") {
      currentChatData.messages = currentChatData.messages.map(message => {
        if (message.id === messageID) {
          message.text = e.target.value;
        }
        return message;
      });
      sendedMessages = sendedMessages.map(message => {
        if (message.id === messageID) {
          message.text = e.target.value;
        }
        return message;
      });

      localStorage.setItem(SENDED_MESSAGES, JSON.stringify(sendedMessages));
      setIsMessageEditing(false);
      setChatData(newChatData);
    }

  }

  return (
    <li className={cls.join(" ")}>
      <div className={classes.MessageContent}>
        <p>{sender}</p>
        {
          isMessageEditing
            ? <input
                type="text"
                className={classes.editField}
                placeholder="Введите новое сообщение."
                onKeyPress={editMessage}
              />
            : <p>{text}</p>
        }
        <time>{time}</time>
        {
          sender === "You"
            ? <>
              <button className={classes.delete}
                      onClick={deleteMessage}>&#10007;</button>
              <button
                className={classes.edit}
                onClick={() => setIsMessageEditing(true)}>
                &#9998;
              </button>
            </>
            : null
        }
      </div>
    </li>
  )
}

Message.propTypes = {
  sender: PropTypes.string,
  text: PropTypes.string,
  time: PropTypes.string,
}

Message.defaultProps = {
  sender: "",
  text: "",
  time: "",
}

export default Message;