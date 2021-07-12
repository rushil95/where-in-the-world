import React, { useEffect } from "react";

export default function useHandleOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(event) {
      const { target } = event;
      
      if (ref.current && !ref.current.contains(target)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
