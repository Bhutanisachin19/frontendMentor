import "../top-section/TopSection.css";

const Nav = (props) => {
  const navContentData = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div className="nav-container">
      {props?.showText ? <h1 className="main-name">loopstudios</h1> : <></>}
      <div className="nav-content">
        {navContentData.map((navItem) => {
          return <span className="nav-item">{navItem}</span>;
        })}
      </div>
    </div>
  );
};

export default Nav;
