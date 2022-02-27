import React from "react";
import ChatPreview from "./ChatPreview";

function ChatList({ chats }) {
  console.log('chats from chat list list list ',chats);
  return (
    <section className="chat-list">
      {chats.map((chat,idx) => {
        return <ChatPreview chat={chat}  key={idx}/>;
      })}
    </section>
  );
}

export default ChatList;
