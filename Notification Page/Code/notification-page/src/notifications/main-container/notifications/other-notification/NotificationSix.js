import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-nathan-peterson.webp";

const NotificationSix = () => {
  return (
    <div className="noti-container-one noti-container-four">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Nathan Peterson &nbsp;</span>
          reacted to your recent post &nbsp;
          <span className="highlighted-text">
            5 end-game strategies to increase your win rate &nbsp;
          </span>
        </span>
        <span className="user-time">2weeks ago</span>
      </div>
    </div>
  );
};

export default NotificationSix;
