import { IoMdMic } from "react-icons/io";
import { FaRegGrin } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { chatService } from "../../services/chatService";

function ChatRoomFooter({ msgs, setMsgs }) {
  const [isFocus, setIsFocus] = useState(false);
  const [msgContent, setMsgContent] = useState("");
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const [isSending, setIsSending] = useState(false);

  const onSubmitNewMsg = async () => {
    setIsSending(true);
    const msg = {
      chatId: currentChatId,
      senderId: '1',
      receiverId: currentChatId,
      content: msgContent,
      messageType: 'txt',
      timeStamp: Date.now(),
    };
    setMsgs((prevMsgs) => {
      return [...prevMsgs, msg];
    });
    try {
      await chatService.postMessage(msg);
      setIsSending(false);
      setMsgContent("");
    } catch {}
  };

  const detectEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onSubmitNewMsg();
    }
  };

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
            value={msgContent}
            onChange={(e) => setMsgContent(e.target.value)}
            onSubmit={onSubmitNewMsg}
            onKeyDown={detectEnterPress}
          />
        </div>
        <div onClick={onSubmitNewMsg} className="icon-wrapper">
          {isFocus ? <MdSend /> : <IoMdMic />}
        </div>
      </div>
    </footer>
  );
}

export default ChatRoomFooter;
