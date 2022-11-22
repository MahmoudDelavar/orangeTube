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
        .post("http://orangetube.ir/api/likeAndDislike/Like", info)
        .then((res) => {
          setLikeCount(likeCount + 1);
          setIsLiked(!isLiked);
          setIsDisLiked(false);
        });
    } else {
      axios
        .post("http://orangetube.ir/api/likeAndDislike/unLike", info)
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
        .post("http://orangetube.ir/api/likeAndDislike/disLike", info)
        .then((res) => {
          setDisLikeCount(disLikeCount + 1);
          setIsDisLiked(!isDisLiked);
          setIsLiked(false);
        });
    } else {
      axios
        .post("http://orangetube.ir/api/likeAndDislike/unDisLike", info)
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
      .post("http://orangetube.ir/api/likeAndDislike/getLikedCount", info)
      .then((res) => {
        setLikeCount(res.data.data.length);

        //__Check This User Liked Vido/Comments Or Not__
        res.data.data.map((likes) => {
          if (likes.userId === userId) {
            setIsLiked(true);
          } else {
            setIsLiked(false);
          }
        });
      });

    //__How many DisLiked this video or this Video Commnets__
    axios
      .post("http://orangetube.ir/api/likeAndDislike/getDisLikedCount", info)
      .then((res) => {
        setDisLikeCount(res.data.data.length);

        //__Check This User DisLiked Vido/Comments Or Not__
        res.data.data.map((disLiked) => {
          if (disLiked.userId === userId) {
            setIsDisLiked(true);
          } else {
            setIsDisLiked(false);
          }
        });
      });
  });
  //---------------------------------------------------------------------

  return (
    <>
      <div className="likeBox vertical-align-middle">
        {!isDisLiked ? (
          <>
            <AiOutlineDislike size={30} onClick={handleDisLike} />
            <span>{disLikeCount}</span>
          </>
        ) : (
          <>
            <AiFillDislike size={30} onClick={handleDisLike} />
            <span>{disLikeCount}</span>
          </>
        )}

        {!isLiked ? (
          <>
            <AiOutlineLike size={30} onClick={handleLike} />
            <span>{likeCount}</span>
          </>
        ) : (
          <>
            <AiFillLike size={30} onClick={handleLike} />
            <span>{likeCount}</span>
          </>
        )}
      </div>
    </>
  );
};

export default LikeAndDisLike;
