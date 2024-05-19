import React, { useEffect } from "react";

const Switch = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return null;
};

export default Switch;
