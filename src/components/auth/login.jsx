import InputComponent from "../inputComponent/inputComponent";
import { Key, Mailbox } from "react-bootstrap-icons";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FcBusinessman, FcPicture } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import "./style.css";
import axios from "axios";

//====================================================

const Login = () => {
  //-------------------------- states -----------------------------------------------
  const [err, setErr] = useState([]);
  const [serverMsg, setServerMsg] = useState([]);

  //-------------------------- send data to backend ---------------------------------
  //____handle submit___
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const userInfo = {
      email,
      password,
    };
    const isValid = await validate(userInfo);
    if (isValid) {
      axios
        .post("http://localhost:4000/api/auth/login", userInfo)
        .then((res) => {
          err.length = 0;
          localStorage.setItem("token", res.data.data);
          setServerMsg(res.data.message);
          e.target.reset();
          setTimeout(() => {
            window.location = "/home";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          setErr(["ایمیل یا پسورد صحیح نمی باشد"]);
        });
      e.target.reset();
    }
  };
  //-------------------------- validation inputs ------------------------------------
  let schema = yup.object().shape({
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نیست")
      .required("ایمیل را وارد کنید "),
    password: yup.string().min(6, "پسورد باید حداقل 6 کاراکتر باشد"),
  });

  const validate = async (userInfo) => {
    try {
      const result = await schema.validate(userInfo, { abortEarly: false });
      return result;
    } catch (err) {
      console.log(err);
      setErr(err.errors);
    }
  };

  return (
    <>
      {/* --- Errors Message Box ---  */}
      {err.length !== 0 && (
        <ul>
          <div className="alert alert-danger">
            {err.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </div>
        </ul>
      )}

      {/* --- Server Message Box ---  */}
      {serverMsg.length !== 0 && (
        <div className="alert alert-primary">
          <p>{serverMsg}</p>
        </div>
      )}
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
