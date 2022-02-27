export function filterChats(filter) {
  return async (dispatch) => {
    const filterRegex = new RegExp(filter, "i");
    const chatsToShow = chats.filter((chat) => filterRegex.test(chat.title));
    try {
      dispatch({ type: "FILTER_CHATS", filter });
      dispatch({ type: "UPD_CHATS_TO_SHOW", chatsToShow });
    } catch (err) {
      console.log("couldn't filter the chats ", err);
    }
  };
}
export function updCurrChat(chatId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPD_CURR_CHAT", chatId });
    } catch (err) {
      console.log("couldn't update the current chat id ", err);
    }
  };
}
