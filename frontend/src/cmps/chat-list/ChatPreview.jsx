import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


function ChatPreview() {
  return (
    <div className="chat-preview flex align-center">
      <div className="avatar-wrapper">
        <div className="avatar flex">
          <img
            src="https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png"
            alt=""
          />
        </div>
      </div>
      <div className="preview-content flex col ">
        <div className="top-row flex">
          <p className="chat-title">Nofar Yunger</p>
          <div className="last-msg-timestamp">23:22</div>
        </div>
        <div className="bottom-row flex">
          <p className="last-msg">so what do u think?</p>
          <ul className="extra-preview-icons">
            <li className="open-menu-btn">
              <MdKeyboardArrowDown/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
