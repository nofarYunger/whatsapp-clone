import axios from "axios";

const BASE_URL = "http://localhost:3030/api";

export const chatService = {
  getChatMessages,
  getChats,
  postMessage,
};

async function getChats(filterBy) {
  try {
    const chats = await axios.get(`${BASE_URL}/chats`);
    return chats;
  } catch (error) {
    console.log(error); //todo: address errors and put a message to inform the users
  }
}

async function getChatMessages(chatId) {
  try {
    const msgs = await axios.get(`${BASE_URL}/message/${chatId}`);
    return msgs;
  } catch (error) {
    console.log(error);
  }
}

async function postMessage(msg, chatId) {
  try {
    await axios.post(`${BASE_URL}/message/${chatId}`, msg);
    return Promise.resolve();
  } catch (error) {
    console.log(error);
  }
}

const chats = [
  {
    id: 1,
    title: "Jon Dow",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(22 / 22 / 2021),
    },
  },
  {
    id: 2,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "dont say that, it's not true ",
      date: new Date(),
    },
  },
  {
    id: 3,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 4,
    title: "Johnny Depp",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 5,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "it's like 3 in the morning now and im talking to myself",
      date: new Date(),
    },
  },
  {
    id: 6,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "that it im done with dmmy",
      date: new Date(),
    },
  },
  {
    id: 1,
    title: "Jon Dow",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(22 / 22 / 2021),
    },
  },
  {
    id: 2,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "dont say that, it's not true ",
      date: new Date(),
    },
  },
  {
    id: 3,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 4,
    title: "Johnny Depp",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 5,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "it's like 3 in the morning now and im talking to myself",
      date: new Date(),
    },
  },
  {
    id: 6,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "that it im done with dmmy",
      date: new Date(),
    },
  },
  {
    id: 1,
    title: "Jon Dow",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(22 / 22 / 2021),
    },
  },
  {
    id: 2,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "dont say that, it's not true ",
      date: new Date(),
    },
  },
  {
    id: 3,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 4,
    title: "Johnny Depp",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 5,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "it's like 3 in the morning now and im talking to myself",
      date: new Date(),
    },
  },
  {
    id: 6,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "that it im done with dmmy",
      date: new Date(),
    },
  },
  {
    id: 1,
    title: "Jon Dow",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(22 / 22 / 2021),
    },
  },
  {
    id: 2,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "dont say that, it's not true ",
      date: new Date(),
    },
  },
  {
    id: 3,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 4,
    title: "Johnny Depp",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1611081607/oge850vneveabeu4f9va.png",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "hi whats up?",
      date: new Date(),
    },
  },
  {
    id: 5,
    title: "Miki Maka",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610697822/fmm9jhmzswwrvb9iwbku.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "it's like 3 in the morning now and im talking to myself",
      date: new Date(),
    },
  },
  {
    id: 6,
    title: "Lady Gaga",
    thumbnail:
      "https://res.cloudinary.com/nofar/image/upload/v1610702495/ygxow9dsfc0ai2oliwpf.jpg",
    lastMsg: {
      id: 1,
      type: "text",
      senderId: 1,
      receiverId: 2,
      content: "that it im done with dmmy",
      date: new Date(),
    },
  },
];
