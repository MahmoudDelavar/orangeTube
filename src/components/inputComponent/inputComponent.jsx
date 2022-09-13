const InputComponent = ({ lable, icon, onChange, value, name, type }) => {
  return (
    <>
      <div className="form-group  text-lef mb-3">
        <label htmlFor={name}>{lable}</label>
        <div className="input-group">
          <div className="input-group-prepend d-flex align-items-stretch">
            <span className="input-group-text  ">{icon}</span>
          </div>
          <input
            className="form-control"
            type={type}
            name={name}
            id={name}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  );
};

export default InputComponent;
