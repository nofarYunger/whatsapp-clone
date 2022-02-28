import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MessageList } from ".";
import { chatService } from "../../services/chatService";

function ChatRoomContent() {
  const {currentChatId} = useSelector((state) => state.chatReducer);
  const [msgs, setMsgs] = useState([]);

  useEffect(async () => {
    const messages = await chatService.getChatMessages(currentChatId);
    setMsgs(messages);
  }, [currentChatId]);

  return (
    <section className="chat-room-content flex col">
      <MessageList msgs={msgs} />
    </section>
  );
}

export default ChatRoomContent;
