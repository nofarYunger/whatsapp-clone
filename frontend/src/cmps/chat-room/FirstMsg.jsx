import React from "react";
import Icon from "../util/Icon";

function FirstMsg() {
  return (
    <div className="message-wrapper ">
      <div className="first-msg-in-chat ">
        <p>
          <span>
            <Icon id="lock" />
          </span>
          Messages are end-to-end encrypted. No one outside of this chat, not
          even WhatsApp, can read or listen to them. Click to learn more.
        </p>
      </div>
    </div>
  );
}

export default FirstMsg;
