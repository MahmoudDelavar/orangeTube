import LandingPage from "./landingPage";
import UploadVideo from "./uploadVideo";
import { Link } from "react-router-dom";

//==================================================
const VideoPage = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <UploadVideo />
            <LandingPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
