import React from "react";
import { useState } from "react";
import Icon from "../util/Icon";

const btns = [
  { icon: "search", label: "Search", className: "search-icon" },
  { icon: "back", label: "Go Back", className: "go-back-icon" },
];

function ChatListSearchBar({ filterBy, setFilterBy }) {
  const onChangeFilter = ({ target }) => {
    setFilterBy(target.value);
    if (!filterBy) setIsSearchActive(false);
  };

  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="chat-list-search-bar desktop-only">
      <div className="search-bar-wrapper">
        <button
          onClick={() => {
            setIsSearchActive((prevState) => !prevState);
            setFilterBy("");
          }}
          className={`blank-btn search-bar-btn ${
            isSearchActive ? "active-search" : ""
          }`}
        >
          {btns.map((btn) => {
            return (
              <div
                className={btn.className}
                aria-label={btn.label}
                key={btn.label}
              >
                <Icon id={btn.icon} />
              </div>
            );
          })}
        </button>
        <label className="input-wrapper flex align-center">
          <input
            className="blank-input"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => {
              if (!filterBy) setIsSearchActive(true);
            }}
            type="text"
            value={filterBy}
            onChange={onChangeFilter}
            placeholder="Search or start new chat"
          />
        </label>
      </div>
    </div>
  );
}

export default ChatListSearchBar;
