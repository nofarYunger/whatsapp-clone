import React, { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { chatService } from "../../services/chatService";
import Icon from "../util/Icon";
import OpenMenu from "../util/OpenMenu";

const options = [
  { title: "Group info", func: () => console.log("Group info") },
  { title: "Select messages", func: () => console.log("Select messages") },
  {
    title: "Mute notifications",
    func: () => console.log("Mute notifications"),
  },
  { title: "Clear messages", func: () => console.log("Clear messages") },
  { title: "Delete chat", func: () => console.log("Starred messages") },
];

function ChatRoomHeader({ closeMobileChatRoom }) {
  const [currChat, setCurrChat] = useState(null);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const { currentChatId } = useSelector((state) => state.chatReducer);

  useEffect(async () => {
    const chat = await chatService.getChatById(currentChatId);
    setCurrChat(chat);
  }, [currentChatId]);

  if (!currChat) return <div className="header"></div>; //if we dont have currChatId the ChatRoom cmp will not be shown so its just for now .
  return (
    <header className="header flex space-between">
      <div className="chat-info flex align-center">
        <div
          className="icon-wrapper mobile-only go-back "
          aria-label="Go back"
          onClick={closeMobileChatRoom}
        >
          <Icon id="back" />
        </div>
        <div className="avatar-container">
          <img src={currChat.thumbnail} className="avatar" />
        </div>
        <div className="chat-title flex col">
          <p>{currChat.name}</p>
          <span>{currChat.online && "online"}</span>
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
        <div
          className="icon-wrapper flex center"
          onClick={() => setIsOptionOpen((prevState) => !prevState)}
        >
          <Icon id="menu" />
          <div className={`menu-wrapper ${isOptionOpen ? "open" : ""}`}>
            <OpenMenu
              options={options}
              closeMenu={() => setIsOptionOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ChatRoomHeader;
