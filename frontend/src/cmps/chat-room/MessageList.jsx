import React, { useEffect } from "react";
import { useRef } from "react";
import Message from "./Message";

function MessageList({ msgs }) {
  const elLastMsg = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [msgs]);

  const scrollToBottom = () => {
    elLastMsg.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="chat-room-content flex col">
      <section className="message-list">
        {msgs &&
          msgs.map((msg) => {
            return <Message key={msg.id} msg={msg} />;
          })}
        <div ref={elLastMsg} className="last-message"></div>
      </section>
    </section>
  );
}

export default MessageList;
