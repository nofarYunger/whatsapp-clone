import React, { useState } from "react";
import Icon from "../util/Icon";
import UseTimeFormat from "../../hooks/UseTimeFormat";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/chatAction";
import { BsPinAngleFill } from "react-icons/bs";
import OpenMenu from "../util/OpenMenu";

function ChatPreview({ chat }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();
  const { updCurrChat } = bindActionCreators(actions, dispatch);

  const isActive = () => {
    if (chat.id !== currentChatId) return;
    else {
      return true;
    }
  };

  return (
    <div
      className={`chat-preview flex align-center ${
        isActive() ? "curr-chat" : ""
      }`}
      onClick={() => updCurrChat(chat.id)}
    >
      <div className="avatar-wrapper">
        <div className="avatar flex">
          <img src={chat.thumbnail} alt="Thumbnail" />
        </div>
      </div>
      <div
        className={`preview-content flex col ${chat.unread ? "unread" : ""}`}
      >
        <div className="top-row flex">
          <div className="chat-title">
            <p>{chat.name}</p>
          </div>
          <div className="last-msg-timestamp">
            {UseTimeFormat(chat.lastMsg.timeStamp)}
          </div>
        </div>
        <div className="bottom-row flex">
          <div className={`last-msg ${chat.typing ? "typing" : ""}`}>
            <p>{chat.typing ? "typing..." : chat.lastMsg.content}</p>
          </div>
          <ul className="extra-preview-icons">
            {chat.pinned && (
              <li className="pin" aria-label="Pinned">
                <BsPinAngleFill />
              </li>
            )}
            {chat.unread !== 0 && (
              <li className="unread-badge">{chat.unread}</li>
            )}
            <li
              className="open-menu-btn"
              aria-label="Menu"
              onClick={(e) => {
                e.stopPropagation();
                setIsOptionOpen((prevState) => !prevState);
              }}
            >
              <Icon id={"downArrow"} />
              <div className={`menu-wrapper ${isOptionOpen ? "open" : ""}`}>
                <OpenMenu
                  options={options}
                  closeMenu={() => setIsOptionOpen(false)}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;

const options = [
  { title: "Archive chat", func: () => console.log("Archive chat") },
  {
    title: "Mute notifications",
    func: () => console.log("Mute notifications"),
  },
  { title: "Delete Chat", func: () => console.log("Delete Chat") },
  { title: "Pin chat", func: () => console.log("Pin chat") },
  { title: "Mark as unread", func: () => console.log("Mark as unread") },
];
