import React from "react";
import { ChatRoomHeader } from "./";
import ChatRoomContent from "./ChatRoomContent";
import ChatRoomFooter from "./ChatRoomFooter";

function ChatRoom() {
  return (
    <main className="chat-room flex col">
      <ChatRoomHeader />
      <ChatRoomContent />
      <ChatRoomFooter />
    </main>
  );
}

export default ChatRoom;
