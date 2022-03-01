import { format } from "date-fns";
import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import Icon from "../util/Icon";

const user = { title: "Nofar", id: "1" };

function Message({ msg, isFirstMsgByUser }) {
  const isFirstMsg = isFirstMsgByUser();

  const isSender = () => {
    if (msg.senderId === user.id) return true;
    return false;
  };


  
  return (
    <div
      className={`message-wrapper flex ${
        isSender() ? "message-out" : "message-in"
      }`}
    >
      <div
        className={`message-container ${
          isSender() ? "message-out" : "message-in"
        } ${isFirstMsg ? "first-message" : ""}`}
      >
        <div className={`message ${msg.messageType} `}>
          {msg.messageType === "txt" && <p>{msg.content}</p>}
          {msg.messageType === "img" && <img src={msg.content} />}

          {isSender() && (
            <span>
              <BiCheckDouble />
            </span>
          )}

          <span>{format(msg.timeStamp, "kk:mm")}</span>
          <div className="options-btn">
            <Icon id="downArrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
