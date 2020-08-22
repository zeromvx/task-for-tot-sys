import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./message.module.scss";
import {useMessages} from "../../hooks/useMessages";

const Message = ({messageID, sender, text, time}) => {
  const cls = [classes.Message];
  const [isMessageEditing, setIsMessageEditing] = useState(false);
  const {editMessage, deleteMessage} = useMessages();

  if (sender !== "You") {
    cls.push(classes.MessageIn);
  } else {
    cls.push(classes.MessageOut);
  }

  const handleEditMessage = ({key, target: {value}}) => {
    if (key === "Enter") {
      editMessage(value, messageID);
      setIsMessageEditing(false);
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
              onKeyPress={handleEditMessage}
            />
            : <p>{text}</p>
        }
        <time>{time}</time>
        {
          sender === "You"
            ? <>
              <button className={classes.delete}
                      onClick={() => deleteMessage(messageID)}>&#10007;</button>
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
  messageID: PropTypes.number,
  sender: PropTypes.string,
  text: PropTypes.string,
  time: PropTypes.string,
}

Message.defaultProps = {
  messageID: 0,
  sender: "",
  text: "",
  time: "",
}

export default Message;