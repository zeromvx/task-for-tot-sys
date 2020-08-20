import React, {useState} from "react";
import classes from "./send-message-form.module.scss";

export default function SendMessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputChange = ({target: {value}}) => {
    setMessage(value);
  }

  return (
    <form className={classes.SendMessageForm} onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={message} type="text" placeholder="Введите сообщение..."/>
      <button className={classes.SendMessageButton}>
        Отправить
      </button>
    </form>
  )
}