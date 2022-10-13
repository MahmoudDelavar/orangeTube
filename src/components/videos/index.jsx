import LandingPage from "./views/landingPage";
import { Link, Outlet } from "react-router-dom";
import { AiOutlinePlusSquare, AiFillVideoCamera } from "react-icons/ai";

import "./styles/uploadStyle.css";
import { FaUpload } from "react-icons/fa";
//==================================================
const VideoPage = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row  justify-content-between">
          <div className="col  text-center">
            <div className="link-box">
              <Link className="upload-link" to="/uploadVideo">
                <FaUpload size={40} />
                <p>آپلود ویدئو</p>
              </Link>
            </div>
          </div>

          <div className="col  text-center ">
            <div className="link-box">
              <Link className="upload-link " to="/subscribtionsPage">
                <AiFillVideoCamera size={40} />
                <p>کاربران دنبال شده</p>
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-12">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
