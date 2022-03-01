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
  const isFirstMsgByUser = (idx) => {
    if (idx === 0) return true;
    if (msgs[idx].senderId !== msgs[idx - 1].senderId) return true;
    return false;
  };

  return (
    <section className="chat-room-content flex col">
      <section className="message-list">
        {msgs &&
          msgs.map((msg, idx) => {
            return (
              <Message
                isFirstMsgByUser={() => isFirstMsgByUser(idx)}
                key={msg.id}
                msg={msg}
              />
            );
          })}
        <div ref={elLastMsg} className="last-message"></div>
      </section>
    </section>
  );
}

export default MessageList;
