import React from "react";
import { useSelector } from "react-redux";
import { ChatListContainer } from "../cmps/chat-list";
import { ChatRoom } from "../cmps/chat-room";
import IntroConnection from "../cmps/util/IntroConnection";

function ChatApp() {
  const { currentChatId } = useSelector((state) => state.chatReducer);

  return (
    <main className="chat-app">
      <ChatListContainer />
      {currentChatId ? <ChatRoom /> : <IntroConnection />}
    </main>
  );
}

export default ChatApp;
