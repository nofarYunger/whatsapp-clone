import React from "react";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";

function ChatListSearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="chat-list-search-bar">
      <div className="search-bar-wrapper">
       {isSearchActive} 
        <button
          onClick={() => setIsSearchActive((prevState) => !prevState)}
          className={`blank-btn search-bar-btn ${
            isSearchActive ? "active-search" : ""
          }`}
        >
        
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
          <div className="go-back-icon">
            <AiOutlineArrowLeft />
          </div>
        </button>
        <label className="input-wrapper flex align-center">
          <input
            className="blank-input"
            type="text"
            placeholder="Search or start new chat"
          />
        </label>
      </div>
    </div>
  );
}

export default ChatListSearchBar;
