import "./MainContainer.css";
import Header from "../Header";
import NotificationOne from "./notifications/notification-one/NotificationOne";
import NotificationTwo from "./notifications/other-notification/NotificationTwo";
import NotificationThree from "./notifications/other-notification/NotificationThree";
import NotificationFour from "./notifications/notification-four/NotificationFour";
import NotificationSix from "./notifications/other-notification/NotificationSix";
import NotificationSeven from "./notifications/other-notification/NotificationSeven";
import NotificationFive from "./notifications/other-notification/NotificationFive";

const MainContainer = () => {
  return (
    <div className="top-container">
      <Header />
      <div className="notifications-container">
        <NotificationOne />
        <NotificationTwo />
        <NotificationThree />
        <NotificationFour />
        <NotificationFive />
        <NotificationSix />
        <NotificationSeven />
      </div>
    </div>
  );
};

export default MainContainer;
