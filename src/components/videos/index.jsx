import LandingPage from "./landingPage";
import UploadVideo from "./uploadVideo";

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
