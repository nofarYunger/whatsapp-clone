import React from "react";
import ChatPreview from "./ChatPreview";

function ChatList({ chats }) {
  return (
    <section className="chat-list-wrapper">
      <div className="chat-list">
        {chats.map((chat, idx) => {
          return <ChatPreview chat={chat} key={idx} />;
        })}
      </div>
    </section>
  );
}

export default ChatList;
