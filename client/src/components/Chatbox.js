import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "../App.css";

export default function Chatbox() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3000");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div id="chatBox" style={{ width: "30%", height: "100%" }}>
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div>
          <input
            name="name"
            onchange={(e) => onTextChange(e)}
            value={state.name}
            label="name'"
          />
        </div>
        <div>
          <input
            name="message"
            onchange={(e) => onTextChange(e)}
            value={state.message}
            label="message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div>
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}
