import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-kimberly-smith.webp";
import ChessImage from "../../../../images/image-chess.webp";

const NotificationFive = () => {
  return (
    <div className="noti-container-one noti-container-four">
      <img className="user-img" src={UserImage} />
      <div className="text-container-notify-one">
        <span>
          <span className="user-name-text">Kimberly Smith &nbsp;</span>
          commented on your picture&nbsp;
          <span className="highlighted-text-blue">Chess Club &nbsp;</span>
        </span>
        <span className="user-time">1week ago</span>
      </div>
      <img className="user-img chess-img" src={ChessImage} />
    </div>
  );
};

export default NotificationFive;
