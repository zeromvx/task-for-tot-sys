import React from "react";
import {Link} from "react-router-dom";
import classes from "./chat-picker.module.scss";
import PropTypes from "prop-types";

const ChatPicker = ({id, title, logo}) => {
  return (
    <li className={classes.ChatPicker}>
      <Link to={`/${id}`}>
        <img src={logo} alt="chatLogo" className={classes.chatLogo}/>
        <div className={classes.chatTitle}>
          {title}
        </div>
      </Link>
    </li>
  )
}

ChatPicker.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
}

ChatPicker.defaultProps = {
  id: "",
  title: "",
  logo: "",
}

export default ChatPicker;