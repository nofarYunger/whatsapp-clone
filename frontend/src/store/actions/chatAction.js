export function updCurrChat(chatId) {
  return async (dispatch) => {
    
    try {
      dispatch({ type: "UPD_CURR_CHAT", chatId });
    } catch (err) {
      console.log("couldn't update the current chat id ", err);
    }
  };
}
