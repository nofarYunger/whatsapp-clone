import React from "react";
import { useSelector } from "react-redux";
import { ChatListContainer } from "../cmps/chat-list";
import { ChatRoom } from "../cmps/chat-room";
import IntroConnection from "../cmps/util/IntroConnection";
import UseIsMobile from "../hooks/UseIsMobile";

function ChatApp() {
  const { currentChatId } = useSelector((state) => state.chatReducer);
  const isMobile = UseIsMobile();
  return (
    <main className="chat-app">
      <ChatListContainer />
      <ChatRoom />
      {!isMobile && !currentChatId && <IntroConnection />}
    </main>
  );
}

export default ChatApp;
