import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../comment/coment";
import LikeAndDisLike from "../LikeAndDislike/Like&Disike";
import Subscribe from "../subscribe/subscribe";
import SideVideo from "./sideVideo";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineComment, AiFillVideoCamera } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
//================================================================

const PlayVideo = () => {
  //------------------States And Initional Data--------------------
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [showComment, setShowComment] = useState(false);

  //--------------------------Life Sycel--------------------------
  //__Load Selected Video__
  useEffect(() => {
    axios
      .post("http://orangetube.ir/api/videos/getVideo", { videoId })
      .then((res) => {
        setVideo(res.data.data);
      });
  });

  //-----------------------Personal Functions-----------------------
  //__Uptated Comments(last Comment)__
  const updateComments = (newComment) => {
    setCommentList(commentList.concat(newComment));
  };

  //__Load This Video Comments(All Comments)__
  const handleLoadComments = () => {
    axios
      .post("http://orangetube.ir/api/comments/getComments", { videoId })
      .then((res) => {
        setCommentList(res.data.data);
        setShowComment(!showComment);
      });
  };

  //================================================================
  if (video.writer) {
    return (
      <>
        <div className="row mt-4 ">
          <div className=" col-lg-9 col-md-8 col-sm-12  ">
            {/* ________________Video Player________________ */}
            <div className="row ">
              <div className="col-12 ">
                <video
                  controls
                  style={{ width: "100%" }}
                  src={`http://orangetube.ir:4000/${video.filePath}`}
                ></video>
              </div>
            </div>

            {/* ___Video Detailes (sub - Likes - comment)___ */}

            <div className="row  align-items-center">
              <div className="d-flex flex-row justify-content-end ">
                <div className="m-2">
                  <LikeAndDisLike video videoId={videoId} />
                </div>
                <div className="m-2">
                  <AiOutlineComment onClick={handleLoadComments} size={30} />
                </div>
                <div className="m-2">
                  <Subscribe userId={video.writer && video.writer._id} />
                </div>
              </div>
            </div>

            {/* ______Video Detailes (title - Writer - Description)______ */}
            <div className="row">
              <h4>{video.title}</h4>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "5px",
                    borderRadius: "50%",
                  }}
                  src={`http://orangetube.ir:4000/${
                    video.writer && video.writer.avatarPath
                  }`}
                  alt=""
                />

                <span>{video.writer && video.writer.userName}</span>
              </div>
              <p>{video.description}</p>
              <hr />
            </div>

            {/* ________Commetns(Write Box And View All Comments)________ */}
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

          {/* ____Sidebar(More Video To Show)____ */}
          <div className=" col-lg-3 col-md-4 col-sm-12  text-center">
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
