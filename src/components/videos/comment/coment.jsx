import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TemplateComment from "./templateComment";
//==================================================

const Comment = (props) => {
  //-------------------
  const commentWriter = useSelector((state) => state.isloginState.userInfo.id);
  const postId = props.postId;
  const commentList = props.commentList;
  const showComment = props.showComment;
  //-------------------------- states  -----------------------------------------------
  const [comments, setComments] = useState([]);

  //-------------------------- send data to backend ---------------------------------
  //____handle submit___

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentWriter) {
      alert("برای ثبت دیدگاه ابتدا ثبت نام کنید ");
      return;
    }
    const form = new FormData(e.currentTarget);
    const text = form.get("text");
    const info = {
      text,
      commentWriter,
      postId,
    };
    //-------
    axios
      .post("http://localhost:4000/api/comments/addComment", { info })
      .then((res) => {
        props.refreshFunction(res.data.data);
        e.target.reset();
      })
      .catch((err) => {});
  };
  //--------------------------------------------------------------

  //--------------------
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <h6>دیدگاه ها</h6>

          <div className="col-6">
            <form onSubmit={(e) => handleSubmit(e)} action="">
              <label>نطر شما...</label>
              <textarea
                className="form-control mb-2"
                name="text"
                id=""
                cols="10"
                rows="3"
                placeholder="دیدگاه خود را بنویسید"
              ></textarea>
              <button type="submit" className="btn btn-primary ">
                ارسال
              </button>
            </form>
          </div>
          {showComment && (
            <div className="col-6 mb-3">
              {commentList.map((comment, index) => (
                <TemplateComment
                  key={index}
                  postId={postId}
                  comment={comment}
                  refreshFunction={props.refreshFunction}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
