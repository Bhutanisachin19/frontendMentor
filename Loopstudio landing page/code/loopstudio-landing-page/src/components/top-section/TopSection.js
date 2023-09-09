import Nav from "./Nav";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="top-section-container">
      <Nav showText={true} />

      <div className="immence-experience-container">
        <span className="experince-text">Immersive</span>
        <span className="experince-text">experience</span>
        <span className="experince-text">that deliver</span>
      </div>
    </div>
  );
};

export default TopSection;
