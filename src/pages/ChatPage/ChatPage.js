import React, {useEffect, useState} from 'react';
import Drawer from "../../components/Drawer/Drawer";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

function ChatPage() {
  const [chatData, setChatData] = useState(
    JSON.parse(localStorage.getItem("chatData")) || []
  );

  useEffect(() => {
    fetch("https://run.mocky.io/v3/d373383e-6274-4a6d-80b4-7b281f660423")
      .then(res => res.json())
      .then(data => {
        setChatData(data.chats);
        localStorage.setItem("chatData", JSON.stringify(data.chats));
      });
  }, []);

  return (
    <div className="App">
      <Drawer chatData={chatData}/>
      <ChatWindow chatData={chatData} setChatData={setChatData}/>
    </div>
  );
}

export default ChatPage;
