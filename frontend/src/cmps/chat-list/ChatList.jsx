import React from "react";
import ChatPreview from "./ChatPreview";

function ChatList({ chats }) {
  return (
    <section className="chat-list">
      {chats.map((chat,idx) => {
        return <ChatPreview chat={chat}  key={idx}/>;
      })}
    </section>
  );
}

export default ChatList;
