import { data } from "./dummyData";
import { storageService } from "./localService";

export const chatService = {
  getChatMessages,
  getChats,
  postMessage,
};

async function getChats() {
  try {
    let chats = await storageService.load("CHATS");
    if (!chats?.length) {
      chats = data.users;
    }
    return Promise.resolve(chats);
  } catch (error) {
    console.log(error); //todo: address errors and put a message to inform the users
  }
}

async function getChatMessages(currChatId) {
  try {
    const messages = await storageService.load("MESSAGES");
    if (!messages?.length) {
      messages = data.msgs;
    }
    const msgs = await messages.filter((msg) => msg.chatId === currChatId);
    return Promise.resolve(msgs);
  } catch (error) {
    console.log(error);
  }
}

async function postMessage(msg) {
  msg.date = new Date();
  try {
    const messages = await storageService.load("MESSAGES");
    messages.push(msg);
    await storageService.save("MESSAGES",messages);
    return Promise.resolve();
  } catch (error) {
    console.log(error);
  }
}
