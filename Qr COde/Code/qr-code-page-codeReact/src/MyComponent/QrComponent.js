import "./Style.css";
import QrImage from "../image-qr-code.png";

const QrComponenet = () => {
  return (
    <div className="Qr-Container">
      <img className="img-tag" src={QrImage} alt="QR Code" />

      <h3 className="improve-header-text">
        Improve your front-end skills by building projects
      </h3>
      <p className="improve-header-text span-tag">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level.
      </p>
    </div>
  );
};

export default QrComponenet;
