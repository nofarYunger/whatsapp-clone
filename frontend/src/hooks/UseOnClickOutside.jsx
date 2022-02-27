import React, { useEffect } from "react";

function UseOnClickOutside({ ref, handler }) {
  console.log(ref);
  useEffect(() => {
    const listener = (event) => {
      if (!ref?.current || ref.current.contains(event.target)) return; //if the user clicked inside the ref->return.
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      console.log("removed listener");
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

export default UseOnClickOutside;
