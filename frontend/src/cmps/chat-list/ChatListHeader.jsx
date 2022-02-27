import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";
import OpenMenu from "../util/OpenMenu";

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
        <div className="icon-wrapper desktop-only flex center">
          <FaCircleNotch />
        </div>
        <div className="icon-wrapper desktop-only flex center">
          <BsFillChatLeftTextFill />
        </div>
        <div className="icon-wrapper mobile-only flex center">
          <AiOutlineSearch />
        </div>

        <div
          className="icon-wrapper option-btn flex center "
          onClick={() => setIsOptionOpen((prevState) => !prevState)}
        >
          <BsThreeDotsVertical />
          <div className={`menu-wrapper ${isOptionOpen ? "open" : ""}`}>
            <OpenMenu
              options={options}
              closeMenu={() => setIsOptionOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ChatListHeader;

const options = [
  { title: "New group", func: () => console.log("New group") },
  { title: "Archived", func: () => console.log("Archived") },
  { title: "Starred messages", func: () => console.log("Starred messages") },
  { title: "Settings", func: () => console.log("Starred messages") },
  { title: "Log out", func: () => console.log("Starred messages") },
];
