import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineComment,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import "./style.css";
//==================================================================================

const LikeAndDisLike = (props) => {
  //-----------Stats---------------------------
  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setDisLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);
  let { videoId, commentId } = props;
  const userId = useSelector((state) => state.isloginState.userInfo.id);

  let info = {};
  if (props.video) {
    info = { videoId, userId };
  } else {
    info = { commentId, userId };
  }

  //-----------Hanle Like And Dislike Function---------------------------
  //__Like Function__
  const handleLike = () => {
    if (!isLiked) {
      axios
        .post("http://localhost:4000/api/likeAndDislike/Like", info)
        .then((res) => {
          setLikeCount(likeCount + 1);
          setIsLiked(!isLiked);
          setIsDisLiked(false);
        });
    } else {
      axios
        .post("http://localhost:4000/api/likeAndDislike/unLike", info)
        .then((res) => {
          setLikeCount(likeCount - 1);
          setIsLiked(!isLiked);
        });
    }
  };

  //__DisLike Function__
  const handleDisLike = () => {
    if (!isDisLiked) {
      axios
        .post("http://localhost:4000/api/likeAndDislike/disLike", info)
        .then((res) => {
          setDisLikeCount(disLikeCount + 1);
          setIsDisLiked(!isDisLiked);
          setIsLiked(false);
        });
    } else {
      axios
        .post("http://localhost:4000/api/likeAndDislike/unDisLike", info)
        .then((res) => {
          setDisLikeCount(disLikeCount - 1);
          setIsDisLiked(!isDisLiked);
        });
    }
  };

  //-----------Life Sycel Functios-------------------------------------------------
  useEffect(() => {
    //__How many Liked this video or This Video Commnets__
    axios
      .post("http://localhost:4000/api/likeAndDislike/getLikedCount", info)
      .then((res) => {
        setLikeCount(res.data.data.length);

        //__Check This User Liked Vido/Comments Or Not__
        res.data.data.map((likes) => {
          if (likes.userId === userId) {
            setIsLiked(true);
          }
        });
      });

    //__How many DisLiked this video or this Video Commnets__
    axios
      .post("http://localhost:4000/api/likeAndDislike/getDisLikedCount", info)
      .then((res) => {
        setDisLikeCount(res.data.data.length);

        //__Check This User DisLiked Vido/Comments Or Not__
        res.data.data.map((disLiked) => {
          if (disLiked.userId === userId) {
            setIsDisLiked(true);
          }
        });
      });
  });
  //---------------------------------------------------------------------

  return (
    <>
      <div style={{ display: "inline-block" }}>
        <div className="likeBox">
          {!isDisLiked ? (
            <>
              <AiOutlineDislike size={25} onClick={handleDisLike} />
              <span>{disLikeCount}</span>
            </>
          ) : (
            <>
              <AiFillDislike size={25} onClick={handleDisLike} />
              <span>{disLikeCount}</span>
            </>
          )}
        </div>

        <div className="likeBox">
          {!isLiked ? (
            <>
              <AiOutlineLike size={25} onClick={handleLike} />
              <span>{likeCount}</span>
            </>
          ) : (
            <>
              <AiFillLike size={25} onClick={handleLike} />
              <span>{likeCount}</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LikeAndDisLike;