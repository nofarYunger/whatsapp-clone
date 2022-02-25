import React from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";

function ChatListHeader() {
  return (
    <header className="header chat-list-header flex">
      <div className="avatar-wrapper">
        <div className="avatar">
          <img
            src="https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png"
            alt=""
          />
        </div>
      </div>
      <div className="header-icons flex align-center ">
        <div className="icon-wrapper flex center">
          <FaCircleNotch />
        </div>
        <div className="icon-wrapper flex center">
          <BsFillChatLeftTextFill />
        </div>
        <div className="icon-wrapper flex center">
          <BsThreeDotsVertical />
        </div>
      </div>
    </header>
  );
}

export default ChatListHeader;
