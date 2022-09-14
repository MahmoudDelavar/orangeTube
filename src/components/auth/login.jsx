import InputComponent from "../inputComponent/inputComponent";
import { Key, Mailbox } from "react-bootstrap-icons";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FcBusinessman, FcPicture } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "./style.css";
//====================================================

const Login = () => {
  //-------------------------- send data to backend ---------------------------------
  //____handle submit___
  const handleSubmit = () => {
    console.log("submit");
  };
  //-------------------------- validation inputs ------------------------------------

  return (
    <>
      {/* --- Form Inputs ---  */}
      <form
        onSubmit={(e) => handleSubmit(e)}
        method="post"
        className="main-box"
      >
        <h3 className="text-center">ورود</h3>

        <InputComponent
          name="email"
          type="email"
          lable="ایمیل "
          icon={<Mailbox />}
        />
        <InputComponent
          name="password"
          type="password"
          lable="رمز عبور"
          icon={<Key />}
        />
        <div className="text-center d-grid gap-2 mt-4 ">
          <button type="submit" className="btn btn-outline-primary ">
            ورود
          </button>
        </div>
        <div className="row text-center mt-4 align-items-center">
          <p>ورود با شبکه های اجتماعی</p>

          <div className="col ">
            <Link to="#">
              <FaTwitter className="icon-login" size={50} />
            </Link>
          </div>
          <div className="col ">
            <Link to="#">
              <FaGoogle className="col icon-login" size={50} />
            </Link>
          </div>
          <div className="col ">
            <Link to="#">
              <FaFacebook className="col icon-login" size={50} />
            </Link>
          </div>
          <div className="col  ">
            <Link to="#">
              <FaInstagram className="col icon-login" size={50} />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
