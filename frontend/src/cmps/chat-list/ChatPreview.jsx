import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import UseTimeFormat from "../../hooks/UseTimeFormat";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/chatAction";

function ChatPreview({ chat }) {
  const currentChatId = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();
  const { updCurrChat } = bindActionCreators(actions, dispatch);

  const isActive = () => {
    if (chat.id === currentChatId) return true;
    return false;
  };

  return (
    <div
      className={`chat-preview flex align-center ${isActive ? "currChat" : ""}`}
      onClick={() => updCurrChat(chat.id)}
    >
      <div className="avatar-wrapper">
        <div className="avatar flex">
          <img src={chat.thumbnail} alt="Thumbnail" />
        </div>
      </div>
      <div className="preview-content flex col ">
        <div className="top-row flex">
          <div className="chat-title">
            <p>{chat.title}</p>
          </div>
          <div className="last-msg-timestamp">
            {UseTimeFormat(chat.lastMsg.date)}
          </div>
        </div>
        <div className="bottom-row flex">
          <div className="last-msg">
            <p>{chat.lastMsg.content}</p>
          </div>
          <ul className="extra-preview-icons">
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
