import { data } from "./dummyData";
import { storageService } from "./localService";
import { utilService } from "./util";

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
      await storageService.save("CHATS", chats);
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
      await storageService.save("MESSAGES", messages);
    }

    // _seenUnreadMsgs(currChatId);
    const msgs = await messages.filter((msg) => msg.chatId === currChatId);
    return Promise.resolve(msgs);
  } catch (error) {
    console.log(error);
  }
}

async function _seenUnreadMsgs(chatId) {
  const chats = await getChats();
  const currChatIdx = chats.findIndex((chat) => chat.id === chatId);
  chats[currChatIdx].unread = 0;
  await storageService.save("CHATS", [...chats]);
}

async function postMessage(msg) {
  msg.id = utilService.makeId();
  try {
    const messages = await storageService.load("MESSAGES");
    messages.push(msg);
    console.log({ messages });
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
  } catch (error) {
    console.log(error);
  }
}
