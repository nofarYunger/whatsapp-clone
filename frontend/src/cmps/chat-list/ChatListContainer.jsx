import React from "react";
import { ChatListHeader, ChatList,ChatPreview, ChatListSearchBar } from "./";

function ChatListContainer() {
  return (
    <section className="chat-list-container">
      <ChatListHeader />
      <ChatListSearchBar />
      <ChatPreview/>
      <ChatPreview/>
      <ChatPreview/>
      <ChatPreview/>
      <ChatPreview/>
      <ChatPreview/>
      <ChatPreview/>
      {/* <ChatList /> */}
    </section>
  );
}

export default ChatListContainer;
