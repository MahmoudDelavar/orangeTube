import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Template from "./template";

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
            <Link to={`/videos/${v._id}`}>
              <Template
                key={index.i}
                writer={v.writer && v.writer.userName}
                avatar={v.writer && v.writer.avatarPath}
                title={v.title}
                description={v.description}
                thumbnail={v.thumbnail}
                duration={v.duration}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
