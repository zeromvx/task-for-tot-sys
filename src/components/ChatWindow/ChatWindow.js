import React from "react";
import classes from "./chat-window.module.scss";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import MessagesList from "../MessagesList/MessagesList";
import PropTypes from "prop-types";

const ChatWindow = ({ chatData, setChatData }) => {
  return (
    <main className={classes.ChatWindow}>
      <MessagesList chatData={chatData} setChatData={setChatData}/>
      <SendMessageForm chatData={chatData} setChatData={setChatData}/>
    </main>
  )
}

ChatWindow.propTypes = {
  chatData: PropTypes.array,
  setChatData: PropTypes.func
}

ChatWindow.defaultProps = {
  chatData: [],
  setChatData: () => {}
}

export default ChatWindow;