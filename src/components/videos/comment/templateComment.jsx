import LikeAndDisLike from "../LikeAndDislike/Like&Disike";
import "./styles.css";
//==========================================================
const TemplateComment = (props) => {
  //------------------------

  //------------------------
  return (
    <>
      <div className="row">
        <div className="col-12 comment-box">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "5px",
              borderRadius: "50%",
            }}
            src={`http://localhost:4000/${
              props.comment.writer && props.comment.writer.avatarPath
            }`}
            alt=""
          />
          <span className="comment-writer-userName">
            {props.comment.writer && props.comment.writer.userName}
          </span>
          <LikeAndDisLike comment commentId={props.comment._id} />
          <p className="comment-text">{props.comment.text}</p>
        </div>
      </div>
    </>
  );
};

export default TemplateComment;
