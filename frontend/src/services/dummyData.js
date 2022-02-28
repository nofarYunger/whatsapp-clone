import woman1 from "../assets/images/woman1.jpg";
import woman2 from "../assets/images/woman2.jpg";
import woman3 from "../assets/images/woman3.jpg";
import woman4 from "../assets/images/woman4.jpg";
import woman5 from "../assets/images/woman5.jpg";
import woman6 from "../assets/images/woman6.jpg";
import man1 from "../assets/images/man1.jpg";
import man2 from "../assets/images/man2.jpg";
import man3 from "../assets/images/man3.jpg";
import man4 from "../assets/images/man4.jpg";
import man5 from "../assets/images/man5.jpg";
import { utilService } from "./util";

const chats = [
  {
    id: "1",
    thumbnail: woman2,
    name: "Karen Okonkwo",
    phone_number: "+2348123456789",
    whatsapp_name: "karen",
    unread: 1,
    group: false,
    pinned: false,
    typing: true,
    lastMsg: {
      chatId: "1",
      timeStamp: 1646065058483,
      senderId: "1",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "2",
    thumbnail: woman1,
    name: "Love of my life❤️💜",
    phone_number: "+2348123456789",
    whatsapp_name: "Beyonce",
    unread: 3,
    group: false,
    pinned: true,
    typing: false,
    lastMsg: {
      chatId: "2",
      timeStamp: 1646065058483,
      senderId: "1",
      receiverId: "2",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "3",
    thumbnail: man1,
    name: "bob  from the office",
    phone_number: "+2348123456789",
    whatsapp_name: "bobi",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "3",
      timeStamp: 1646065058483,
      senderId: "3",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "4",
    thumbnail: woman3,
    name: "Maia lee",
    phone_number: "+2348123456789",
    whatsapp_name: "Mayush",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "4",
      timeStamp: 1646065058483,
      senderId: "4",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "5",
    thumbnail: man2,
    name: "Josh",
    phone_number: "+2348123456789",
    whatsapp_name: "Josh",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "5",
      timeStamp: 1646065058483,
      senderId: "1 ",
      receiverId: "5",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "6",
    thumbnail: man3,
    name: "Justin Bieber",
    phone_number: "+2348123456789",
    whatsapp_name: "my bea",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "6",
      timeStamp: 1646065058483,
      senderId: "6",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "7",
    thumbnail: woman4,
    name: "Rachel Green",
    phone_number: "+2348123456789",
    whatsapp_name: "rachel green",
    unread: 5,
    group: false,
    pinned: false,
    typing: true,
    lastMsg: {
      chatId: "7",
      timeStamp: 1646065058483,
      senderId: "7",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "8",
    thumbnail: woman5,
    name: "Lily Aldrin",
    phone_number: "+2348123456789",
    whatsapp_name: "lily",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "8",
      timeStamp: 1646065058483,
      senderId: "1",
      receiverId: "8",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "9",
    thumbnail: man4,
    name: "Josh",
    phone_number: "+2348123456789",
    whatsapp_name: "Josh",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "9",
      timeStamp: 1646065058483,
      senderId: "9",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "10",
    thumbnail: woman6,
    name: "Mom",
    phone_number: "+2348123456789",
    whatsapp_name: "Irit",
    unread: 1,
    group: false,
    pinned: false,
    typing: true,
    lastMsg: {
      chatId: "10",
      timeStamp: 1646065058483,
      senderId: "1",
      receiverId: "10",
      content: utilService.getRandomSentence(),
    },
  },
  {
    id: "11",
    thumbnail: man5,
    name: "Jake Puck",
    phone_number: "+2348123456789",
    whatsapp_name: "jake",
    unread: 0,
    group: false,
    pinned: false,
    typing: false,
    lastMsg: {
      chatId: "11",
      timeStamp: 1646065058483,
      senderId: "11",
      receiverId: "1",
      content: utilService.getRandomSentence(),
    },
  },
];

const msgs = [
  {
    id: "1",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "2",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "3",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "2",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "4",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "5",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "2",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "6",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "7",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "8",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "9",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "10",
    chatId: "1",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "2",
    content: utilService.getRandomSentence(),
  },
  {
    id: "11",
    chatId: "2",
    timeStamp: 1646038523326,
    senderId: "3",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "12",
    chatId: "2",
    timeStamp: 1646038523326,
    senderId: "3",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "13",
    chatId: "2",
    timeStamp: 1646038523326,
    senderId: "3",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "14",
    chatId: "2",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "3",
    content: utilService.getRandomSentence(),
  },
  {
    id: "15",
    chatId: "2",
    timeStamp: 1646038523326,
    senderId: "3",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "16",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "4",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "17",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "4",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "18",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "4",
    content: utilService.getRandomSentence(),
  },
  {
    id: "19",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "4",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "20",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "4",
    content: utilService.getRandomSentence(),
  },
  {
    id: "21",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "4",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "22",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "4",
    content: utilService.getRandomSentence(),
  },
  {
    id: "23",
    chatId: "3",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "4",
    content: utilService.getRandomSentence(),
  },
  {
    id: "24",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: "5",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "25",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "5",
    content: utilService.getRandomSentence(),
  },
  {
    id: "26",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: "5",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "27",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: "1",
    receiverId: "5",
    content: utilService.getRandomSentence(),
  },
  {
    id: "28",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: "5",
    receiverId: "1",
    content: utilService.getRandomSentence(),
  },
  {
    id: "29",
    chatId: "4",
    timeStamp: 1646038523326,
    senderId: 1,
    receiverId: "5",
    content: utilService.getRandomSentence(),
  },
];
export const data = {
  chats,
  msgs,
};
