import "./MiddleSection.css";
import ImageInteractive from "../../images/desktop/image-interactive.jpg";

const MiddleSection = () => {
  return (
    <div className="middle-section-container">
      <div className="main-wrapper">
        <div className="middle-section-top">
          <img className="img-middle-container" src={ImageInteractive} />
          <div className="leader-container">
            <div className="interactive-text-div">
              <h1 className="interactive-heading-text">
                the leader in interactive VR
              </h1>

              <span>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best compaines around
                the globe.Our award-winnig creations have transformed business
                through digital experiences that bind to their brand.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
