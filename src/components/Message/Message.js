import React from "react";
import classes from "./message.module.scss";

export default function Message({ sender, text, time }) {
  const cls = [classes.Message];

  if (sender) {
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