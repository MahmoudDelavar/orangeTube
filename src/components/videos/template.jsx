import "./styles/templateStyle.css";
//==================================================

const Template = ({ title, description, thumbnail, duration }) => {
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
