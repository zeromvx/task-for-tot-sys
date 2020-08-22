import {useContext} from "react";
import {SENDED_MESSAGES} from "../constants";
import {useParams} from "react-router";
import {ChatContext} from "../context/chat.context";

export const useMessages = () => {
  const {chatData, setChatData} = useContext(ChatContext);

  const newChatData = [...chatData];
  const {chatID} = useParams();
  const currentChatData = newChatData.filter(({id}) => id === chatID)[0];
  const { messages } = currentChatData || [];

  let sendedMessages = JSON.parse(localStorage.getItem(SENDED_MESSAGES));

  const deleteMessage = (messageID) => {
    sendedMessages = sendedMessages.filter(({id}) => id !== messageID);
    currentChatData.messages = currentChatData.messages.filter(({id}) => id !== messageID);

    localStorage.setItem(SENDED_MESSAGES, JSON.stringify(sendedMessages));
    setChatData(newChatData);
  }

  const editMessage = (value, messageID) => {

    currentChatData.messages = currentChatData.messages.map(message => {
      if (message.id === messageID) {
        message.text = value;
      }
      return message;
    });
    sendedMessages = sendedMessages.map(message => {
      if (message.id === messageID) {
        message.text = value;
      }
      return message;
    });

    localStorage.setItem(SENDED_MESSAGES, JSON.stringify(sendedMessages));
    setChatData(newChatData);

  }

  const addMessage = (message) => {
    const newMessage =  {
      chatID,
      id: Math.random(),
      sender: "You",
      text: message,
      time: (new Date()).getHours() + ":" + (new Date()).getMinutes()
    }

    messages.push(newMessage);

    currentChatData.messages = messages;
    let index = newChatData.findIndex(chat => chat.id === chatID);
    newChatData[index] = currentChatData;

    if (sendedMessages) {
      localStorage.setItem(SENDED_MESSAGES, JSON.stringify([...sendedMessages, newMessage]));
    } else {
      localStorage.setItem(SENDED_MESSAGES, JSON.stringify([newMessage]));
    }

    setChatData(newChatData);
  }

  return {
    messages,
    addMessage,
    deleteMessage,
    editMessage
  }
}