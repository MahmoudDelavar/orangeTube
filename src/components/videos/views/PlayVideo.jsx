import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../comment/coment";
import LikeAndDisLike from "../LikeAndDislike/Like&Disike";
import Subscribe from "../subscribe/subscribe";
import SideVideo from "./sideVideo";
import { AiOutlineComment } from "react-icons/ai";
//====================================================

const PlayVideo = () => {
  //--------------------------------------------
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [showComment, setShowComment] = useState(false);

  //--------------------------------------------
  useEffect(() => {
    //__Load Selected Video__
    axios
      .post("http://localhost:4000/api/videos/getVideo", { videoId })
      .then((res) => {
        setVideo(res.data.data);
      });
  });

  //------------------------------------------
  const updateComments = (newComment) => {
    setCommentList(commentList.concat(newComment));
  };
  //------------------------------------------
  const handleLoadComments = () => {
    //__Load This Video Comments__
    axios
      .post("http://localhost:4000/api/comments/getComments", { videoId })
      .then((res) => {
        setCommentList(res.data.data);
        setShowComment(!showComment);
      });
  };

  //------------------------------------------
  if (video.writer) {
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
            <div className="row align-items-center ">
              <div className="col-4 ">
                <h1>{video.title}</h1>
              </div>
              <div className="col-8 ">
                <button
                  style={{
                    backgroundColor: `${showComment ? "#AAAAAA" : "#68eb11"}`,
                  }}
                  onClick={handleLoadComments}
                >
                  comments
                </button>

                <LikeAndDisLike video videoId={videoId} />
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
            <div className="row">
              <div className="col">
                <Comment
                  postId={video._id}
                  refreshFunction={updateComments}
                  commentList={commentList}
                  showComment={showComment}
                />
              </div>
            </div>
          </div>
          <div className="col col-md-3 col-sm-12 col-xs-12 text-center">
            <SideVideo />
          </div>
        </div>
      </>
    );
  } else {
    return <>Loding</>;
  }
};

export default PlayVideo;
