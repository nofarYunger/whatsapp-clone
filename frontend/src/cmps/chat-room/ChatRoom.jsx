import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ChatRoomHeader,ChatRoomFooter } from "./";
import * as actions from "../../store/actions/chatAction";
import { chatService } from "../../services/chatService";
import MessageList from "./MessageList";




function ChatRoom() {
  const dispatch = useDispatch();
  const { updCurrChat } = bindActionCreators(actions, dispatch);
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const [isMobileChatSeen, setIsMobileChatSeen] = useState(true);
  const [msgs, setMsgs] = useState([]);

  useEffect(async () => {
    const messages = await chatService.getChatMessages(currentChatId);
    setMsgs(messages);
  }, [currentChatId]);

  useEffect(() => {
    setIsMobileChatSeen(!!currentChatId);
  }, [currentChatId]);

  const closeMobileChatRoom = async () => {
    await updCurrChat(null);
    setIsMobileChatSeen((prevState) => !prevState);
  };

  return (
    <main
      className={`chat-room flex col ${isMobileChatSeen ? "" : "out-of-view"}`}
    >
      <ChatRoomHeader closeMobileChatRoom={closeMobileChatRoom} />
      <MessageList msgs={msgs} />
      <ChatRoomFooter msgs={msgs} setMsgs={setMsgs} />
    </main>
  );
}

export default ChatRoom;
