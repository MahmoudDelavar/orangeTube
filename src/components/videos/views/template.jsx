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
      <div className="col">
        <div className="card template " style={{ width: "18rem" }}>
          <img
            src={`http://localhost:4000/${thumbnail}`}
            className="card-img-top thumbnail"
            alt="thumbnail"
          />
          <div>
            <img
              src={`http://localhost:4000/${avatar}`}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
              alt=""
            />
            <span>{writer}</span>
          </div>
          <span className="time">
            {minutes}:{seconds}
          </span>
          <div className="card-body">
            <h4>{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
