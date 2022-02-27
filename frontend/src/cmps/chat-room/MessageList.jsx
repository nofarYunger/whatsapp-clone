import React from "react";
import Message from "./Message";

function MessageList({ msgs }) {
  return (
    <section className="message-list">
      {msgs &&
        msgs.map((msg) => {
          return <Message key={msg.id} msg={msg} />;
        })}
    </section>
  );
}

export default MessageList;
