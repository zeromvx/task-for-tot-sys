import React from "react";
import "./loader.scss";

export function Loader() {
  return (
    <div className="lds-roller-wrapper">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}