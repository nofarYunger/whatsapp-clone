import React, { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { chatService } from "../../services/chatService";

function ChatRoomHeader({ closeMobileChatRoom }) {
  const [currChat, setCurrChat] = useState(null);
  const { currentChatId } = useSelector((state) => state.chatReducer);

  useEffect(async () => {
    const chat = await chatService.getChatById(currentChatId);
    console.log({ currentChatId });
    console.log({ chat });
    setCurrChat(chat);
  }, [currentChatId]);

  if (!currChat) return <div className="header"></div>; //if we dont have currChatId the ChatRoom cmp will not be shown so its just for now .
  return (
    <header className="header flex space-between">
      <div className="chat-info flex align-center">
        <div
          className="icon-wrapper mobile-only go-back"
          onClick={closeMobileChatRoom}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="avatar-container">
          <img src={currChat.thumbnail} className="avatar" />
        </div>
        <div className="title">
          <p>{currChat.name}</p>
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
