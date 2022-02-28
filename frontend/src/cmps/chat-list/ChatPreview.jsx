import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPin } from "react-icons/go";
import UseTimeFormat from "../../hooks/UseTimeFormat";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/chatAction";

function ChatPreview({ chat }) {
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
          <div className="last-msg">
            <p>{chat.lastMsg.content}</p>
          </div>
          <ul className="extra-preview-icons">
            {chat.pinned && (
              <li className="pin">
                <GoPin />
              </li>
            )}
            {chat.unread !== 0 && (
              <li className="unread-badge">{chat.unread}</li>
            )}
            <li className="open-menu-btn">
              <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
