import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

function ChatRoomHeader({ toggleMobileChatRoom }) {
  return (
    <header className="header flex space-between">
      <div className="chat-info flex align-center">
        <div
          className="icon-wrapper mobile-only go-back"
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
        <div className="icon-wrapper desktop-only flex center">
          <AiOutlineSearch />
        </div>
        <div className="icon-wrapper mobile-only flex center">
          <HiPhone />
        </div>
        <div className="icon-wrapper mobile-only flex center">
          <FaVideo />
        </div>

        <div className="icon-wrapper  flex center">
          <BsThreeDotsVertical />
        </div>
      </div>
    </header>
  );
}

export default ChatRoomHeader;
