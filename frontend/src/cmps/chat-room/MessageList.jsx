import React from "react";
import Message from "./Message";

function MessageList({ msgs }) {
  return (
    <section className="chat-room-content flex col">
      <section className="message-list">
        {msgs &&
          msgs.map((msg) => {
            return <Message key={msg.id} msg={msg} />;
          })}
      </section>
    </section>
  );
}

export default MessageList;
