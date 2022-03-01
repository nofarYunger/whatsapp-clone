import React, { useState } from "react";
import Icon from "../util/Icon";
import OpenMenu from "../util/OpenMenu";

const headerBtns = [
  { icon: "status", label: "Status", className: "desktop-only" },
  { icon: "chat", label: "New chat", className: "desktop-only" },
  { icon: "search", label: "Search", className: "mobile-only" },
  { icon: "menu", label: "Menu", onClick: true, className: "option-btn" },
];

const options = [
  { title: "New group", func: () => console.log("New group") },
  { title: "Archived", func: () => console.log("Archived") },
  { title: "Starred messages", func: () => console.log("Starred messages") },
  { title: "Settings", func: () => console.log("Starred messages") },
  { title: "Log out", func: () => console.log("Starred messages") },
];

function ChatListHeader() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <header className="header chat-list-header flex align-center">
      <div className="mobile-only chat-list-title">WhatsApp</div>
      <div className="avatar-wrapper desktop-only flex align-center">
        <div className="avatar">
          <img
            src="https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png"
            alt=""
          />
        </div>
      </div>

      <div className="header-icons flex align-center ">
        {headerBtns.map((btn) => {
          return (
            <div
              className={`icon-wrapper flex center ${btn.className}`}
              aria-label={btn.label}
              key={btn.label}
              onClick={
                btn.onClick &&
                (() => setIsOptionOpen((prevState) => !prevState))
              }
            >
              <Icon id={btn.icon} />

              {btn.icon === "menu" && ( //the popup menu
                <div className={`menu-wrapper ${isOptionOpen ? "open" : ""}`}>
                  <OpenMenu
                    options={options}
                    closeMenu={() => setIsOptionOpen(false)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default ChatListHeader;
