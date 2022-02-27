import { format } from "date-fns";
import React from "react";
import { BiCheckDouble, BiCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const user = { title: "nofar", id: 1 };

function Message({ msg }) {
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
        }`}
      >
        <div className="message">
          <p>{msg.content}</p>
          {isSender() && (
            <span>
              <BiCheckDouble />
            </span>
          )}
          <span>{format(msg.date, "kk:mm")}</span>
          <div className="options-btn">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
