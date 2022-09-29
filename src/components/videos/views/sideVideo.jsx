import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./../styles/sideVideoStyle.css";
//================================================================

const SideVideo = () => {
  //------------------States And Initional Data--------------------
  const [videos, setVideos] = useState([]);

  //--------------------------Life Sycel--------------------------
  //__Load All Videos To show__
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/videos/allVideos")
      .then((res) => {
        let info = res.data.data;
        setVideos(info);
      })
      .catch((err) => console.log("loading ERR", err));
  }, []);

  //================================================================
  return (
    <>
      <div className="row side-video-title">
        <p className="mt-2">سایر ویدئوها</p>
      </div>
      <div className="row side-box ">
        {videos.map((v, index) => (
          <>
            <div
              key={index}
              className="row align-items-center side-video-item "
            >
              {/* ___________Video Info___________ */}
              <div className="col-3 side-video-info ">
                <span>{v.title}</span>
                <br />
                <span>{v.writer && v.writer.userName}</span>
                <br />
                <span>wiew</span>
              </div>

              {/* ___________Video Thumbnail___________ */}
              <div className="col-9 side-video-thumbnail">
                <Link to={`/videos/${v._id}`}>
                  <img
                    style={{ width: "100%", marginRight: "5px" }}
                    src={`http://localhost:4000/${v.thumbnail}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SideVideo;
