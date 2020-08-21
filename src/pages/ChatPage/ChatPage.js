import React, {Component} from 'react';
import Drawer from "../../components/Drawer/Drawer";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import {Loader} from "../../components/UI/Loader/Loader";

class ChatPage extends Component {
  state = {
    chatData: [],
    isLoading: true
  }

  handleChatDataChange = (chatData) => {
    this.setState({chatData});
  }

  addSendedMessages = () => {
    let newChatData = [...this.state.chatData];
    const sendedMessages = JSON.parse(localStorage.getItem("sendedMessages"));

    if (sendedMessages) {
      newChatData = newChatData.map(chat => {
        const currentChatMessages = sendedMessages.filter(message => message.chatID === chat.id);
        chat.messages = chat.messages.concat(currentChatMessages);

        return chat;
      });

      this.setState({chatData: newChatData})
    }
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/d373383e-6274-4a6d-80b4-7b281f660423")
      .then(res => res.json())
      .then(data => {
        this.setState({
          chatData: data.chats,
          isLoading: false
        }, this.addSendedMessages);
      });
  }


  render() {
    const {chatData, isLoading} = this.state;

    return (
      <div className="App">
        {
          isLoading
            ? <Loader />
            : <>
                <Drawer chatData={chatData}/>
                <ChatWindow
                  chatData={chatData}
                  setChatData={this.handleChatDataChange}
                />
              </>
        }
      </div>
    );
  }
}

export default ChatPage;
