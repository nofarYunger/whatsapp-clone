import React from "react";
import { Message } from ".";

const msg1 = {
  content: "hey!! this is my first dummy data try!",
  date: new Date(),
  senderId: 2,
  receiverId: 1,
  chatId: 3,
};

const msg2 = {
  content: "looks great so far! good job to you🥰",
  date: new Date(),
  senderId: 1,
  receiverId: 2,
  chatId: 3,
};

function ChatRoomContent() {
  return (
    <section className="chat-room-content flex col">
      <Message msg={msg1} />
      <Message msg={msg2} />
    </section>
  );
}

export default ChatRoomContent;
