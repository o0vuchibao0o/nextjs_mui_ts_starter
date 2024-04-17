"use client";

import { useState } from "react";

const LikePage = () => {
  const handleClick = () => {
    alert("me");
  };

  const [name, setName] = useState("Hoidanit");
  return <div onClick={() => handleClick()}>LikePage with name = {name}</div>;
};

export default LikePage;
