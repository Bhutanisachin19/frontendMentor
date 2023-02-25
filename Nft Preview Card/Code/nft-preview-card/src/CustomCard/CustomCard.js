import "./CustomCard.css";
import CardImage from "../images/image-equilibrium.jpg";
import etherIcon from "../images/icon-ethereum.svg";
import clockIcon from "../images/icon-clock.svg";
import imageAvatar from "../images/image-avatar.png";
import iconView from "../images/icon-view.svg";

const CustomCard = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img className="image-style" src={CardImage} />
        <div class="overlay">
          <img id="image-hover" src={iconView} />
        </div>
      </div>

      <p className="name-p">Equilibrium #3429</p>

      <p className="line-p">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="info-div">
        <span className="img-txt-wrapper">
          <img className="icon-img-tag" src={etherIcon} />
          <span className="span-1">0.041ETH</span>
        </span>

        <span className="img-txt-wrapper">
          <img className="icon-img-tag" src={clockIcon} />
          <span className="span-2">3 days left</span>
        </span>
      </div>

      <hr className="hr-tag"></hr>

      <div className="lastContentWrapper">
        <img className="avatarImage" src={imageAvatar} />
        <span className="span-wrapper">
          <span className="span-wrapper-child-1">Creation of</span>
          <span className="span-wrapper-child-2">Jules Wyvern</span>
        </span>
      </div>
    </div>
  );
};

export default CustomCard;
