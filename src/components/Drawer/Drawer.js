import React from "react";
import classes from "./drawer.module.scss";
import ChatPicker from "../ChatPicker/ChatPicker";
import PropTypes from "prop-types";

const Drawer = ({chatData}) => {

  return (
    <aside className={classes.Drawer}>
      <ul>
        {
          chatData.map(({id, title, logo}) => (
            <ChatPicker
              key={id}
              id={id}
              title={title}
              logo={logo}
            />
          ))
        }
      </ul>
    </aside>
  )
}

Drawer.propTypes = {
  chatData: PropTypes.array,
}

Drawer.defaultProps = {
  chatData: [],
}

export default Drawer;