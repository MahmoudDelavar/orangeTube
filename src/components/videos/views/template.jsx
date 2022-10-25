import "../styles/templateStyle.css";
//==================================================

const Template = ({
  title,
  description,
  thumbnail,
  duration,
  avatar,
  writer,
}) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration - minutes * 60);
  return (
    <>
      <div className="template" style={{ width: "18rem" }}>
        <img
          src={`http://orangetube.ir:4000/${thumbnail}`}
          className="card-img-top thumbnail"
          alt="thumbnail"
        />
        <div className="temp-avatar-box">
          <img
            className="temp-avatar"
            src={`http://orangetube.ir:4000/${avatar}`}
            alt="failed"
          />
          <p className="temp-userName">{writer}</p>
        </div>
        <span className="temp-time">
          {minutes}:{seconds}
        </span>
        <div className="card-body">
          <p className="temp-title">{title}</p>
          <p className="temp-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Template;
