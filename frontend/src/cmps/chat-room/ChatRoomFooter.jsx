import { IoMdMic } from "react-icons/io";
import { FaRegGrin } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { useState } from "react";

function ChatRoomFooter() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <footer className="chat-room-footer">
      <div className="footer-content flex align-center">
        <div className="icon-wrapper">
          <FaRegGrin />
        </div>
        <div className="icon-wrapper">
          <FiPaperclip />
        </div>
        <div className="chat-input-wrapper">
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            autoFocus={true}
            type="text"
            placeholder="Type a message"
            className="chat-input"
          />
        </div>
        <div className="icon-wrapper">{isFocus ? <MdSend /> : <IoMdMic />}</div>
      </div>
    </footer>
  );
}

export default ChatRoomFooter;
