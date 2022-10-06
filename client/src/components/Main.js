import React from "react";
import Chatbox from "./Chatbox";
import Subject from "./Subject";
import Signup from "../pages/Signup";
export default function Main() {
  return (
    <div style={{ border: "1px solid red", height: "700px", display: "flex" }}>
      <Chatbox />
      <Subject />
      <Signup />
    </div>
  );
}
