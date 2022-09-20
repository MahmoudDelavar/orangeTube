import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Subscribe from "../subscribe/subscribe";
import SideVideo from "./sideVideo";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/videos/getVideo", { videoId })
      .then((res) => {
        setVideo(res.data.data);
      })
      .catch((err) => {
        console.log("faide loading", err);
      });
  });
  return (
    <>
      <div className="row mt-4">
        <div className="col col-md-9 col-sm-12 col-xs-12">
          <div className="col-12">
            <video
              controls
              style={{ width: "100%" }}
              src={`http://localhost:4000/${video.filePath}`}
            ></video>
          </div>
          <div className="row align-items-center">
            <div className="col-9 ">
              <h1>{video.title}</h1>
            </div>
            <div className="col-3 ">
              <Subscribe userId={video.writer && video.writer._id} />
            </div>
          </div>

          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "5px",
              borderRadius: "50%",
            }}
            src={`http://localhost:4000/${
              video.writer && video.writer.avatarPath
            }`}
            alt=""
          />
          <span>{video.writer && video.writer.userName}</span>
          <p>{video.description}</p>
          <hr />
        </div>
        <div className="col col-md-3 col-sm-12 col-xs-12 text-center">
          <SideVideo />
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
