import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./send-message-form.module.scss";
import {useParams} from "react-router";

const SendMessageForm = ({chatData, setChatData}) => {
  const [message, setMessage] = useState("");
  const {chatID} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    const newChatData = [...chatData];
    const currentChatData = newChatData.filter(({ id }) => id === chatID)[0];
    const { messages } = currentChatData;

    messages.push(
      {
        sender: "You",
        text: message,
        time: (new Date()).getHours() + ":" + (new Date()).getMinutes()
      }
    )

    currentChatData.messages = messages;
    let index = newChatData.findIndex(chat => chat.id === chatID);
    newChatData[index] = currentChatData;



    setMessage("");
    setChatData(newChatData);
  }

  const handleInputChange = ({target: {value}}) => {
    setMessage(value);
  }

  return (
    <form className={classes.SendMessageForm} onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={message} type="text"
             placeholder="Введите сообщение..."/>
      <button className={classes.SendMessageButton}>
        Отправить
      </button>
    </form>
  )
}

SendMessageForm.propTypes = {
  chatData: PropTypes.array,
  setChatData: PropTypes.func
}

SendMessageForm.defaultProps = {
  chatData: [],
  setChatData: () => {
  }
}

export default SendMessageForm;