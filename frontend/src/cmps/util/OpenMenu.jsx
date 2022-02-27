import React, { useRef } from "react";
import UseOnClickOutside from "../../hooks/UseOnClickOutside";

function OpenMenu({ options, closeMenu }) {
  const menuRef = useRef(null); //todo: fix the useRef undefined bug
  UseOnClickOutside(menuRef, closeMenu);

  return (
    <div ref={menuRef} className="open-menu">
      <ul>
        {options?.map((option, idx) => {
          return (
            <li onClick={option.func} key={idx} className="option">
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OpenMenu;
