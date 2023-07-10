import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-jacob-thompson.webp";

const NotificationThree = () => {
  return (
    <div className="noti-container-one">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Jacob Thompson &nbsp;</span>
          has joined your group &nbsp;
          <span className="highlighted-text-blue">Chess Club &nbsp;</span>
          <span className="span-dot"></span>
        </span>
        <span className="user-time">1day ago</span>
      </div>
    </div>
  );
};

export default NotificationThree;
