import "../footer/Footer.css";
import Nav from "../top-section/Nav";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";

const IconsArray = [facebook, twitter, pinterest, instagram];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer-div">
        <div className="left-area">
          <h3>loopstudios</h3>
          <div>
            <Nav />
          </div>
        </div>
        <div className="right-area">
          <div className="icon-container">
            {IconsArray?.map((icon) => {
              return <img className="icon-item" src={icon} />;
            })}
          </div>
          <div className="rights-text">
            2021 loopstudios.All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
