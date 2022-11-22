import axios from "axios";
import { useState } from "react";
import { Link } from "react-bootstrap-icons";
import InputComponent from "../../inputComponent/inputComponent";

//=============================================
const AddLink = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const hanleSubmit = (e) => {
    setIsSending(true);
    e.preventDefault();
    const form = new FormData(e.target);
    const data = form.get("link");
    if (data) {
      axios
        .post("http://orangetube.ir/api/addLink", { data })
        .then((res) => {
          setIsSending(false);
          setMessage(res.data.message);
          e.target.reset();
          setTimeout(() => {
            window.location = "/link";
          }, 1000);
        })
        .catch((err) => {
          console.log("link save ERR", err);
        });
    }
  };
  return (
    <>
      <h1 className="text-center"> Copy Link </h1>
      {isSending && (
        <div className="text-center">
          <div
            className="spinner-border text-success text-center"
            role="status"
          ></div>
          <p className="text-center">......Sending data</p>
        </div>
      )}
      {message && <h1 className="text-success text-center">{message}</h1>}
      <form onSubmit={hanleSubmit}>
        <InputComponent name="link" type="link" lable="لینک " icon={<Link />} />
        <button className="btn btn-primary input-group">ذخیره</button>
      </form>
    </>
  );
};

export default AddLink;
