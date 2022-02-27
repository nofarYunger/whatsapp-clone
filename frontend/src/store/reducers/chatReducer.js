const initialState = {
  currentChatId: null,
  currentChatType: "private", //at the moment supporting only direct msgs..
  filterBy: "",
  chatsToShow: [],
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_CHATS":
      return { ...state, filterBy: action.filter };
    case "UPD_CURR_CHAT":
      return {
        ...state,
        currentChatId: action.chatId,
        currentChatType: action.chatType,
      };
    case "UPD_CHATS_TO_SHOW":
      return { ...state, chatsToShow: action.chatsToShow };
    default:
      return state;
  }
}
