import axios from "axios";
import { useEffect } from "react";
//==========================================================
const TemplateComment = (props) => {
  //------------------------

  //------------------------
  return (
    <>
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
      <span>{props.comment.writer && props.comment.writer.userName}</span>
      <p>{props.comment.text}</p>
    </>
  );
};

export default TemplateComment;
