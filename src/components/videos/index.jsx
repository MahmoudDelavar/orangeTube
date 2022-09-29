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
        <div className="col-12">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
