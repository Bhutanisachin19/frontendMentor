import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <span className="span-left">
        Notifications <span className="badge-span">3</span>
      </span>
      <span className="span-right">Mark all as read</span>
    </div>
  );
};

export default Header;
