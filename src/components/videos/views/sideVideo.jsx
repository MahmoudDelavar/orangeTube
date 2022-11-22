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
      .get("http://orangetube.ir/api/videos/allVideos")
      .then((res) => {
        let info = res.data.data;
        setVideos(info);
      })
      .catch((err) => console.log("loading ERR", err));
  }, []);

  //================================================================
  return (
    <>
      <div className=" side-video-title">
        <p className="mt-2">سایر ویدئوها</p>
      </div>
      <div className=" side-box ">
        {videos.map((v, index) => (
          <>
            <div key={index} className="row  side-video-item ">
              {/* ___________Video Info___________ */}
              <div className="col-4 side-video-info ">
                <span>{v.title}</span>
                <br />
                <span>{v.writer && v.writer.userName}</span>
                <br />
              </div>

              {/* ___________Video Thumbnail___________ */}
              <div
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
                className="col-8 side-video-thumbnail"
              >
                <Link to={`/videos/${v._id}`}>
                  <img
                    style={{ width: "100%" }}
                    src={`http://orangetube.ir:4000/${v.thumbnail}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default SideVideo;
