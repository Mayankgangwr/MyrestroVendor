var initialState = [];
const Notification = (state = initialState, action) => {
  if (action.type == "ReadNotification") {
    return action.payload;
  } else {
    return state;
  }
};
export default Notification;
