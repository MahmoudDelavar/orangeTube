import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const SideVideo = () => {
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
      {videos.map((v, index) => (
        <>
          <div className="row align-items-center mb-2">
            <div className="col-3 text-letf ">
              <span>{v.title}</span>
              <br />
              <span>{v.writer && v.writer.userName}</span>
              <br />
              <span>wiew</span>
            </div>
            <div className="col-9">
              <Link to={`/videos/${v._id}`}>
                <img
                  style={{ width: "100%", marginRight: "5px" }}
                  src={`http://localhost:4000/${v.thumbnail}`}
                  alt=""
                />
              </Link>
            </div>
            <hr className="mt-4" />
          </div>
        </>
      ))}
    </>
  );
};

export default SideVideo;
