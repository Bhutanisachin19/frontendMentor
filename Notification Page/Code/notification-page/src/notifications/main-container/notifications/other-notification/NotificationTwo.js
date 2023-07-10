import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-angela-gray.webp";

const NotificationTwo = () => {
  return (
    <div className="noti-container-one">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Angela Gray &nbsp;</span>
          followed you&nbsp;
          <span className="span-dot"></span>
        </span>
        <span className="user-time">5m ago</span>
      </div>
    </div>
  );
};

export default NotificationTwo;
