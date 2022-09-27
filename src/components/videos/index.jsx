import LandingPage from "./views/landingPage";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare, AiFillVideoCamera } from "react-icons/ai";
import "./styles/uploadStyle.css";
//==================================================
const VideoPage = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row  justify-content-between">
          <div className="col  text-center">
            <div className="link-box">
              <Link className="upload-link" to="uploadVideo">
                <AiOutlinePlusSquare size={130} />
                <p>آپلود ویدئو</p>
              </Link>
            </div>
          </div>

          <div className="col  text-center ">
            <div className="link-box">
              <Link className="upload-link " to="/mychannel">
                <AiFillVideoCamera size={130} />
                <p> کانال من</p>
              </Link>
            </div>
          </div>
          <hr />
          <div className="col-12">
            <LandingPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
