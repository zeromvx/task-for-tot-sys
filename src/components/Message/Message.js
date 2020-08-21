import React from "react";
import PropTypes from "prop-types";
import classes from "./message.module.scss";

const Message = ({sender, text, time}) => {
  const cls = [classes.Message];

  if (sender !== "You") {
    cls.push(classes.MessageIn);
  } else {
    cls.push(classes.MessageOut);
  }

  return (
    <li className={cls.join(" ")}>
      <div className={classes.MessageContent}>
        <p>{sender}</p>
        <p>{text}</p>
        <time>{time}</time>
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