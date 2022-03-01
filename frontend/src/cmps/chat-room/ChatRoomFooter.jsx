import { useState } from "react";
import { useSelector } from "react-redux";
import { chatService } from "../../services/chatService";
import Attachments from "./Attachments";
import Icon from "../util/Icon";

function ChatRoomFooter({ msgs, setMsgs }) {
  const [isFocus, setIsFocus] = useState(false);
  const [msgContent, setMsgContent] = useState("");
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const [isSending, setIsSending] = useState(false);
  const [isAttachOpen, setIsAttachOpen] = useState(false);

  const onSubmitNewMsg = async () => {
    if (!msgContent) return;
    setIsSending(true);
    const msg = {
      //will change in the future
      chatId: currentChatId,
      senderId: "1",
      receiverId: currentChatId,
      content: msgContent,
      messageType: "txt",
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
        <div className="icon-wrapper" aria-label="Emojis">
          <Icon id={"smiley"} />
        </div>
        <div
          className="icon-wrapper attachment"
          onClick={() => setIsAttachOpen((prevState) => !prevState)}
        >
          <Icon id={"attach"} />
          <Attachments
            isAttachOpen={isAttachOpen}
            setIsAttachOpen={setIsAttachOpen}
          />
        </div>
        <div className="chat-input-wrapper">
          <input
            autoFocus={true}
            type="text"
            placeholder="Type a message"
            className="chat-input"
            value={msgContent}
            onChange={(e) => setMsgContent(e.target.value)}
            onSubmit={onSubmitNewMsg}
            onKeyDown={detectEnterPress}
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              if (!msgContent) setIsFocus(false);
            }}
          />
        </div>
        <div onClick={onSubmitNewMsg} className="icon-wrapper">
          <Icon id={isFocus ? "send" : "microphone"} />
        </div>
      </div>
    </footer>
  );
}

export default ChatRoomFooter;
