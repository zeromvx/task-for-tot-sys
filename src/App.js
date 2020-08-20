import React from 'react';
import './App.scss';
import Drawer from "./components/Drawer/Drawer";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  return (
    <div className="App">
      <Drawer />
      <ChatWindow />
    </div>
  );
}

export default App;
