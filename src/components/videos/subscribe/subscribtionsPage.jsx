import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Template from "../views/template";

//====================================================
const SubscribtionsPage = () => {
  const [videos, setVideos] = useState([]);
  const userFrom = useSelector((state) => state.isloginState.userInfo.id);
  //--------
  useEffect(() => {
    axios
      .post("http://orangetube.ir/api/subscribe/subscribtions", { userFrom })
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.log("failed to load Subscribed:", err);
      });
  }, []);
  //--------
  return (
    <>
      <div className="container">
        <div className="row">
          {videos.length !== 0 ? (
            <>
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
            </>
          ) : (
            <>
              <h5 className="text-center">شما هیچ اشتراکی ندارید </h5>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SubscribtionsPage;
