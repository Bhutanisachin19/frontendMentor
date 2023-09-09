import "../bottom-section/BottomSection.css";
import DeepEarth from "../../images/desktop/image-deep-earth.jpg";
import NightArcade from "../../images/desktop/image-night-arcade.jpg";
import SoccerTeam from "../../images/desktop/image-soccer-team.jpg";
import Grid from "../../images/desktop/image-grid.jpg";
import FromAbove from "../../images/desktop/image-from-above.jpg";
import PocketBorealis from "../../images/desktop/image-pocket-borealis.jpg";
import Curiosity from "../../images/desktop/image-curiosity.jpg";
import NightFisheyeArcade from "../../images/desktop/image-fisheye.jpg";

const ImgArray = [
  DeepEarth,
  NightArcade,
  SoccerTeam,
  Grid,
  FromAbove,
  PocketBorealis,
  Curiosity,
  NightFisheyeArcade,
];

const ImgArrayText = [
  "Deep Earth",
  "Night Arcade",
  "Soccer Team VR",
  "The Grid",
  "From up above VR",
  "Pocket Borealis",
  "The curiosity",
  "Make it fisheye",
];

const BottomSection = () => {
  return (
    <div>
      <div className="top-section">
        <h1>OUR CREATIONS</h1>
        <button className="see-all-button">SEE ALL</button>
      </div>

      <div className="img-arry">
        {ImgArray.length &&
          ImgArray?.map((img, i) => {
            return (
              <span className="img-arry-container">
                <img className="img-arry-item" src={img} />
                <h1 className="image-text-span">
                  {ImgArrayText[i].toUpperCase()}
                </h1>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default BottomSection;
