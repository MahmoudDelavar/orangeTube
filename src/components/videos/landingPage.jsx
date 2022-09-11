import axios from "axios";
import { useEffect, useState } from "react";
import Template from "./template";

//==================================================
const LandingPage = ({ title, description, thumbnail, duration }) => {
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
            <Template
              key={index}
              title={v.title}
              description={v.description}
              thumbnail={v.thumbnail}
              duration={v.duration}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
