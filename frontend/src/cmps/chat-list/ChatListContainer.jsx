import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { chatService } from "../../services/chatService";
import { ChatListHeader, ChatList, ChatListSearchBar } from "./";

function ChatListContainer() {
  const [chatsToShow, setChatsToShow] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { currentChatId } = useSelector((state) => state.chatReducer);


  const query = async () => {
    setIsLoading(true);
    const chats = await chatService.getChats(filterBy);
    setChatsToShow(chats);
    setIsLoading(false);
  };

  useEffect(() => {
    query();
  }, [filterBy, currentChatId]);

  return (
    <section className="chat-list-container">
      <ChatListHeader />
      <ChatListSearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      <ChatList chats={chatsToShow} />
    </section>
  );
}

export default ChatListContainer;
