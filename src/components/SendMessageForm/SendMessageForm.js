import React, {useState} from "react";
import classes from "./send-message-form.module.scss";
import {useMessages} from "../../hooks/useMessages";


const SendMessageForm = () => {
  const [message, setMessage] = useState("");
  const {addMessage} = useMessages();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }
    addMessage(message);
    setMessage("");
  }

  const handleInputChange = ({target: {value}}) => {
    setMessage(value);
  }

  return (
    <form className={classes.SendMessageForm} onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={message} type="text"
             className={classes.input}
             placeholder="Введите сообщение..."/>

      <button className={classes.sendButton} type="submit">
        <img src="/images/send-message.svg" alt="send"/>
      </button>
    </form>
  )
}

export default SendMessageForm;