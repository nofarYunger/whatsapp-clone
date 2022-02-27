import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";

function ChatRoomHeader({toggleMobileChatRoom}) {
  return (
    <header className="header flex space-between">
      <div className="chat-info flex align-center">
        <div
          className="icon-wrapper mobile-go-back"
          onClick={toggleMobileChatRoom}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="avatar-container">
          <img
            src="https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg"
            alt=""
            className="avatar"
          />
        </div>
        <div className="title">
          <p>Chat Title</p>
        </div>
      </div>
      <div className="chat-icons flex align-center">
        <div className="icon-wrapper flex center">
          <AiOutlineSearch />
        </div>

        <div className="icon-wrapper flex center">
          <BsThreeDotsVertical />
        </div>
      </div>
    </header>
  );
}

export default ChatRoomHeader;
