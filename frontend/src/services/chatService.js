import { data } from "./dummyData";
import { storageService } from "./localService";

export const chatService = {
  getChatMessages,
  getChats,
  postMessage,
  getChatById,
};

async function getChats(filterBy) {
  console.log({ filterBy });
  try {
    let chats = await storageService.load("CHATS");
    if (!chats?.length) {
      chats = data.chats;
    }
    //filtering chats
    const filterRegex = new RegExp(filterBy, "i");
    const chatsToShow = chats.filter((chat) => filterRegex.test(chat.name));

    return Promise.resolve(chatsToShow);
  } catch (error) {
    console.log(error); //todo: address errors and put a message to inform the users
  }
}

async function getChatMessages(currChatId) {
  try {
    let messages = await storageService.load("MESSAGES");
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
    await storageService.save("MESSAGES", messages);
    return Promise.resolve();
  } catch (error) {
    console.log(error);
  }
}
async function getChatById(currentChatId) {
  try {
    const chats = await getChats();
    return chats.find((chat) => chat.id === currentChatId);
  } catch (error) {}
}
