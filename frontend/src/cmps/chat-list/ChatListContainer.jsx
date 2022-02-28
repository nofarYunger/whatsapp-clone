import React from "react";
import { useState, useEffect } from "react";
import { chatService } from "../../services/chatService";
import { ChatListHeader, ChatList, ChatListSearchBar } from "./";

function ChatListContainer() {
  const [chatsToShow, setChatsToShow] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const query = async () => {
    {
      console.log(filterBy);
    }

    setIsLoading(true);
    const chats = await chatService.getChats(filterBy);
    setChatsToShow(chats);
    console.log(chatsToShow);
    setIsLoading(false);
  };

  useEffect(() => {
    query();
  }, [filterBy]);

  return (
    <section className="chat-list-container">
      <ChatListHeader />
      <ChatListSearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      <ChatList chats={chatsToShow} />
    </section>
  );
}

export default ChatListContainer;
