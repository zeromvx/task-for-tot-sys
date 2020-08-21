import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./send-message-form.module.scss";
import {useParams} from "react-router";
import Button from "../UI/Button/Button";
import {SENDED_MESSAGES} from "../../constants";

const SendMessageForm = ({chatData, setChatData}) => {
  const [message, setMessage] = useState("");
  const {chatID} = useParams();

  const addMessage = () => {
    const newChatData = [...chatData];
    const currentChatData = newChatData.filter(({ id }) => id === chatID)[0];
    const { messages } = currentChatData;

    const newMessage =  {
      chatID,
      id: Math.random(),
      sender: "You",
      text: message,
      time: (new Date()).getHours() + ":" + (new Date()).getMinutes()
    }

    messages.push(newMessage);

    currentChatData.messages = messages;
    let index = newChatData.findIndex(chat => chat.id === chatID);
    newChatData[index] = currentChatData;

    const sendedMessages = JSON.parse(localStorage.getItem(SENDED_MESSAGES));

    if (sendedMessages) {
      localStorage.setItem(SENDED_MESSAGES, JSON.stringify([...sendedMessages, newMessage]));
    } else {
      localStorage.setItem(SENDED_MESSAGES, JSON.stringify([newMessage]));
    }

    setMessage("");
    setChatData(newChatData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }
    addMessage();
  }

  const handleInputChange = ({target: {value}}) => {
    setMessage(value);
  }

  return (
    <form className={classes.SendMessageForm} onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={message} type="text"
             placeholder="Введите сообщение..."/>
      <Button>
        Отправить
      </Button>
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