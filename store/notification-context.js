import { createContext } from "react";

export default NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}
