import React from "react";

function OpenMenu({ options }) {
  return (
    <div className="open-menu">
      <ul>
        {options?.map((option) => {
          return (
            <li onClick={option.func} className="option">
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OpenMenu;
