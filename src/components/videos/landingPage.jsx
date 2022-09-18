import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Template from "./template";

//==================================================
const LandingPage = ({ title, description, thumbnail, duration }) => {
  const [videos, setVideos] = useState([]);
  // const { userName, avatar } = useSelector(
  //   (state) => state.isloginState.userInfo
  // );

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
              key={index.i}
              writer={v.writer && v.writer.userName}
              avatar={v.writer && v.writer.avatarPath}
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
