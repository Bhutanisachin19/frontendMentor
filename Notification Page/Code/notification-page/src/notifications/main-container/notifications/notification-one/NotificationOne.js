import "./NotificationOne.css";
import UserImage from "../../../../images/avatar-mark-webber.webp";

const NotificationOne = () => {
  return (
    <div className="noti-container-one">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Mark webber &nbsp;</span>
          reacted to your recent post &nbsp;
          <span className="highlighted-text">
            My first tournament today! &nbsp;
          </span>
          <span className="span-dot"></span>
        </span>
        <span className="user-time">1m ago</span>
      </div>
    </div>
  );
};

export default NotificationOne;
