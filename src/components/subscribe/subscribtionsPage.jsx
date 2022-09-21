import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Template from "../videos/template";

//====================================================
const SubscribtionsPage = () => {
  const [videos, setVideos] = useState([]);
  const userFrom = useSelector((state) => state.isloginState.userInfo.id);
  //--------
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/subscribe/subscribtions", { userFrom })
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.log("failed to Unsubscribe");
      });
  }, []);
  //--------
  return (
    <>
      <div className="row">
        <div className="col text-center">
          {videos.length !== 0 ? (
            <>
              <p>شما این کاربران را دنبال میکنید </p>

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
            </>
          ) : (
            <>
              <h1>شما هیچ کاربری را دنبال نمی کنید </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SubscribtionsPage;
