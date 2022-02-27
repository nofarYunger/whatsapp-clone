import React, { useState } from "react";
import { ChatRoomHeader } from "./";
import ChatRoomContent from "./ChatRoomContent";
import ChatRoomFooter from "./ChatRoomFooter";

function ChatRoom() {
const [isMobileChatSeen, setIsMobileChatSeen] = useState(true)
  return (
    <main className={`chat-room flex col ${isMobileChatSeen?'':'out-of-view'}`} >
      <ChatRoomHeader toggleMobileChatRoom={()=>setIsMobileChatSeen(prevState=>!prevState)} />
      <ChatRoomContent />
      <ChatRoomFooter />
    </main>
  );
}

export default ChatRoom;
