import "../notification-one/NotificationOne.css";
import UserImage from "../../../../images/avatar-rizky-hasanuddin.webp";

const NotificationFour = () => {
  return (
    <>
      <div className="noti-container-one noti-container-four">
        <img className="user-img" src={UserImage} />
        <div className="text-container-notify-one">
          <span>
            <span className="user-name-text">Rizky Hasanuddin &nbsp;</span>
            sent you a private message &nbsp;
          </span>
          <span className="user-time">5days ago</span>

          <span className="content-span">
            Hello, thanks for setting up the Chess Club.I've been a member for a
            few weeks now and I'm already having lots of fun and improving my
            game.
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationFour;
