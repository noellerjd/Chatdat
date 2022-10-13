import React, { useState, useEffect, useRef } from "react";

import { Box, TextField, Paper, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
    <>
      <Box id="ChatContainer">
        <Paper id="messageContainer">
          <h2 id="chatHeader">Welcome to ChatDat</h2>
          <TextField
            className="outlined"
            id="outlined-basic"
            label="Message"
            variant="outlined"
          ></TextField>
        </Paper>
        <Button id="sendMessage" size="Large">
          <FontAwesomeIcon id="send" className="svg" icon={faPaperPlane} />
        </Button>
      </Box>
    </>
    // <div id="chatBox" style={{ width: "30%", height: "100%" }}>
    //   <form onSubmit={onMessageSubmit}>
    //     <h1>Messenger</h1>
    //     <div>
    //       <input
    //         name="name"
    //         onChange={(e) => onTextChange(e)}
    //         value={state.name}
    //         label="name'"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         name="message"
    //         onChange={(e) => onTextChange(e)}
    //         value={state.message}
    //         label="message"
    //       />
    //     </div>
    //     <button>Send Message</button>
    //   </form>
    //   <div>
    //     <h1>Chat Log</h1>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         "& > :not(style)": {
    //           m: 1,
    //           width: 128,
    //           height: 128,
    //         },
    //       }}
    //     >
    //       <Paper elevation={4} />
    //     </Box>
    //     {/* {renderChat()} */}
    //   </div>
    // </div>
  );
}
