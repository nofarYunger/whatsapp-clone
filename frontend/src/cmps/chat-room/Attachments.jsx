import React from "react";
import Icon from "../util/Icon";

const attachButtons = [
  { icon: "attachRooms", label: "Choose room" },
  { icon: "attachContacts", label: "Choose contact" },
  { icon: "attachDocument", label: "Choose document" },
  { icon: "attachCamera", label: "Use camera" },
  { icon: "attachImage", label: "Choose image" },
];
function Attachments({ isAttachOpen }) {
  return (
    <ul className={`attachment-list flex col ${isAttachOpen ? "open" : ""}`}>
      {attachButtons.map((btn) => (
        <li className="attach-btn" aria-label={btn.label} key={btn.label}>
          <Icon id={btn.icon} className="attach-icon" />
        </li>
      ))}
    </ul>
  );
}

export default Attachments;
