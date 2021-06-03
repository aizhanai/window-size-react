import React, { useState, useEffect } from "react";

const Window = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return <h1>Window size: {size} px</h1>;
};
export default Window;
//create a variable to store window size
//create a func that update the windowSize
