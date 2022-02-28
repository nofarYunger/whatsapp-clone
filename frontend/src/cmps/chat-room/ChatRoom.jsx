import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ChatRoomHeader } from "./";
import ChatRoomContent from "./ChatRoomContent";
import ChatRoomFooter from "./ChatRoomFooter";
import * as actions from "../../store/actions/chatAction";

function ChatRoom() {
  const [isMobileChatSeen, setIsMobileChatSeen] = useState(false);
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();
  const { updCurrChat } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    if (currentChatId) setIsMobileChatSeen(true);
    else setIsMobileChatSeen(false);
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
      <ChatRoomContent />
      <ChatRoomFooter />
    </main>
  );
}

export default ChatRoom;
