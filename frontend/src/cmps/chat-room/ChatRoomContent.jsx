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
  content: "looks great so far! good job🥰",
  date: new Date(),
  senderId: 1,
  receiverId: 2,
  chatId: 3,
};
const msg3 = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui possimus corrupti officia placeat delectus deleniti veniam similique facilis! Dolor autem ducimus quod expedita delectus illo fuga quia adipisci quisquam.",
  date: new Date(),
  senderId: 2,
  receiverId: 2,
  chatId: 3,
};
const msg4 = {
  content: "thanks ❤️❤️❤️",
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
      <Message msg={msg3} />
      <Message msg={msg4} />
    </section>
  );
}

export default ChatRoomContent;
