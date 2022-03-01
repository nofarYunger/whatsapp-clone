import { isSameDay } from "date-fns";
import React, { useEffect } from "react";
import { useRef } from "react";
import UseTimeFormat from "../../hooks/UseTimeFormat";
import { FirstMsg } from "./";
import Message from "./Message";

function MessageList({ msgs }) {
  const elLastMsg = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [msgs]);

  const scrollToBottom = () => {
    elLastMsg.current?.scrollIntoView();
  };

  const isFirstMsgByUser = (idx) => {
    if (idx === 0) return true;

    if (msgs[idx].senderId !== msgs[idx - 1].senderId) return true;

    return false;
  };

  const isNewDay = (idx) => {
    const msgDate = msgs[idx].timeStamp;

    if (idx === 0) return UseTimeFormat(msgDate);

    const lastMsgDate = msgs[idx - 1].timeStamp;
    const isNewDay = !isSameDay(msgDate, lastMsgDate);

    if (!isNewDay) return false;
    else return UseTimeFormat(msgDate);
  };

  return (
    <section className="chat-room-content flex col">
      <section className="message-list">
        <FirstMsg />
        {msgs &&
          msgs.map((msg, idx) => {
            const isMsgInNewDay = isNewDay(idx);
            return (
              <>
                {isMsgInNewDay && (
                  <div key={idx} className="date-wrapper message-wrapper flex justify-center">
                    <div className="date-modal">{isMsgInNewDay}</div>
                  </div>
                )}
                <Message
                  isFirstMsgByUser={() => isFirstMsgByUser(idx)}
                  key={msg.id}
                  msg={msg}
                />
              </>
            );
          })}
        <div ref={elLastMsg} className="last-message"></div>
      </section>
    </section>
  );
}

export default MessageList;
