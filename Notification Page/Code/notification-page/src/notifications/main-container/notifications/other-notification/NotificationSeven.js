import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-anna-kim.webp";

const NotificationSeven = () => {
  return (
    <div className="noti-container-one noti-container-four">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Anna Kim &nbsp;</span>
          left the group &nbsp;
          <span className="highlighted-text-blue">Chess Club &nbsp;</span>
        </span>
        <span className="user-time">2weeks ago</span>
      </div>
    </div>
  );
};

export default NotificationSeven;
