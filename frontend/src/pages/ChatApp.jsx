import React from "react";
import { ChatListContainer } from "../cmps/chat-list";
import { ChatRoom } from "../cmps/chat-room";

function ChatApp() {
  return (
    <main className="chat-app">
      <ChatListContainer />
      <ChatRoom/>
    </main>
  );
}

export default ChatApp;
