import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Template from "./template";
import "./../styles/templateStyle.css";
import { Link, Outlet } from "react-router-dom";
import { AiOutlinePlusSquare, AiFillVideoCamera } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";

//==================================================
const LandingPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/videos/allVideos")
      .then((res) => {
        let info = res.data.data;
        setVideos(info);
      })
      .catch((err) => console.log("loading ERR", err));
  }, []);
  return (
    <>
      <h3>جدید ترین ویدئو ها </h3>
      <div className="container ">
        <div className="row">
          {videos.map((v, index) => (
            <div className="col ">
              <div className="tempBox mb-2">
                <Link
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={`/videos/${v._id}`}
                >
                  <Template
                    writer={v.writer && v.writer.userName}
                    avatar={v.writer && v.writer.avatarPath}
                    title={v.title}
                    description={v.description}
                    thumbnail={v.thumbnail}
                    duration={v.duration}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
